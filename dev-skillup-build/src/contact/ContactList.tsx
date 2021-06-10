import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { selectedState, listsState, filteredListsState, editState, dummyState } from '../../src/contact/state/contact';
import { IList } from './types/types';
import Empty from './Empty';

const ContactList = () => {
  const [selected, setSelected] = useRecoilState<IList | undefined>(selectedState);
  const setLists = useSetRecoilState<IList[]>(listsState);
  const setEdit = useSetRecoilState<boolean>(editState);
  const setDummy = useSetRecoilState<IList | undefined>(dummyState);
  const filteredLists = useRecoilValue<IList[]>(filteredListsState);
  // const newItem = useRecoilValue<boolean>(newItemState);
  const newSelect = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {

  // }, [selected]);

  // API 호출
  const getData = async () => {
    const url = 'http://localhost:8080/contacts';
    const getLists = await axios.get(url);
    setLists(getLists.data);
  };

  // 연락처 선택 시
  const handleClick = (list: IList) => {
    setDummy(undefined);
    setEdit(false);
    setSelected(list);
    newSelect.current?.focus();
  };

  // if (!newRef.current) {
  //   return;
  // }
  // newRef.current.focus();

  return (
    <div className="contact-list">
      {filteredLists.length > 0 ? (
        <ul>
          {filteredLists.map((list) => (
            <li key={list.id}>
              <button type="button" ref={newSelect} className={selected === list ? 'selected' : ''} onClick={() => handleClick(list)}>
                {list.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default ContactList;
