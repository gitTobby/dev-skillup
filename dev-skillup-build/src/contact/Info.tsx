import React, { MouseEvent, ChangeEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedState, listsState, editState, insertState, newItemState, dummyState } from '../../src/contact/state/contact';
import { IList } from './types/types';
import Empty from './Empty';

const Info = () => {
  const [insert, setInsert] = useRecoilState<boolean>(insertState);
  const [selected, setSelected] = useRecoilState<IList | undefined>(selectedState);
  const [edit, setEdit] = useRecoilState<boolean>(editState);
  const [dummy, setDummy] = useRecoilState<IList | undefined>(dummyState);
  const [lists, setLists] = useRecoilState<IList[]>(listsState);
  const setNewItem = useSetRecoilState<boolean>(insertState);

  const handleEdit = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    if (edit === true) setEdit(false);
    else if (edit === false) {
      setEdit(true);
      setDummy(selected);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDummy({
      ...dummy,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value,
    } as typeof dummy);
  };

  const handleInsert = (e: ChangeEvent<HTMLInputElement>) => {
    setDummy({
      ...dummy,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value,
    } as typeof dummy);
  };

  const handleClear = (num: number) => {
    setEdit(false);
    setDummy(undefined);
    if (num === 1) setInsert(false);
  };

  const handleModify = () => {
    if (dummy) {
      const allLists = lists.map((list) => {
        if (selected?.name === list.name) {
          return dummy;
        } else {
          return list;
        }
      });
      setLists(allLists);
      setEdit(false);
      setSelected(dummy);
    }
  };

  const handleSubmit = () => {
    if (dummy) setLists([...lists, dummy]);
    setSelected(dummy);
    setNewItem(true);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    const delMsg = confirm("'" + selected?.name + "'" + '님의 연락처를 정말 삭제하시겠습니까?');
    if (delMsg == true) {
      const deleteList = lists.filter((list) => {
        if (selected?.name !== list.name) {
          return list;
        }
      });
      setLists(deleteList);
      setEdit(false);
      setSelected(undefined);

      alert('연락처가 삭제되었습니다.');
    }
    return delMsg;
  };

  // console.log(selected);
  // console.log(dummy);

  return (
    <div className="details">
      {selected ? (
        <>
          {edit === false ? (
            <>
              <ul className="info">
                <li>이름: {dummy ? dummy?.name : selected.name}</li>
                <li>나이: {dummy ? dummy?.age : selected.age}</li>
                <li>기타: {dummy ? dummy?.etc : selected.etc}</li>
              </ul>
              <div className="btn-edit">
                <button type="button" onClick={handleEdit}>
                  수정
                </button>
                <button type="button" onClick={handleDelete}>
                  삭제
                </button>
              </div>
            </>
          ) : (
            <>
              <ul className="info">
                <li>
                  이름: <input type="text" name="name" value={dummy?.name} onChange={handleChange} />
                </li>
                <li>
                  나이: <input type="text" name="age" value={dummy?.age} onChange={handleChange} />
                </li>
                <li>
                  기타: <input type="text" name="etc" value={dummy?.etc} onChange={handleChange} />
                </li>
              </ul>
              <div className="btn-edit">
                <button type="button" onClick={handleModify}>
                  저장
                </button>
                <button type="button" onClick={() => handleClear(0)}>
                  취소
                </button>
              </div>
            </>
          )}
        </>
      ) : insert === true ? (
        <>
          <ul className="info">
            <li>
              이름: <input type="text" name="name" onChange={handleInsert} />
            </li>
            <li>
              나이: <input type="text" name="age" onChange={handleInsert} />
            </li>
            <li>
              기타: <input type="text" name="etc" onChange={handleInsert} />
            </li>
          </ul>
          <div className="btn-edit">
            <button type="button" onClick={handleSubmit}>
              확인
            </button>
            <button type="button" onClick={() => handleClear(1)}>
              취소
            </button>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Info;
