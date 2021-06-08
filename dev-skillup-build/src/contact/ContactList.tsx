import React, { useRef } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { selectedState, filteredListsState, editState, newItemState } from '../../src/contact/state/contact';
import { IList } from './types/types';
import Empty from './Empty';

const ContactList = () => {
  const [selected, setSelected] = useRecoilState<IList | undefined>(selectedState);
  const filteredLists = useRecoilValue<IList[]>(filteredListsState);
  const setEdit = useSetRecoilState<boolean>(editState);
  // const newItem = useRecoilValue<boolean>(newItemState);
  // const newRef = useRef<HTMLButtonElement>();

  const handleClick = (list: IList) => {
    setEdit(false);
    const info = list;
    setSelected(info);
    // newRef.current?.focus();
  };

  // if (!newRef.current) {
  //   return;
  // }
  // newRef.current.focus();

  console.log();

  return (
    <div className="contact-list">
      {filteredLists.length > 0 ? (
        <ul>
          {filteredLists.map((list, index) => (
            <li key={index}>
              <button type="button" className={selected === list ? 'selected' : ''} onClick={() => handleClick(list)}>
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
