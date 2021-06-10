import React, { MouseEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedState, listsState, editState, insertState, dummyState } from '../../src/contact/state/contact';
import { IList } from './types/types';
import Empty from './Empty';

const Info = () => {
  const [insert, setInsert] = useRecoilState<boolean>(insertState);
  const [selected, setSelected] = useRecoilState<IList | undefined>(selectedState);
  const [edit, setEdit] = useRecoilState<boolean>(editState);
  const [dummy, setDummy] = useRecoilState<IList | undefined>(dummyState);
  const setLists = useSetRecoilState<IList[]>(listsState);
  //const setNewItem = useSetRecoilState<boolean>(insertState);

  // API 호출
  const getData = async () => {
    const url = 'http://localhost:8080/contacts';
    const getLists = await axios.get(url);
    setLists(getLists.data);
  };

  // 수정 버튼 눌렀을 때
  const handleEdit = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    if (edit === true) setEdit(false);
    else if (edit === false) {
      setEdit(true);
      setDummy(selected);
    }
  };

  // Input 변경 시
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDummy({
      ...dummy,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value,
    } as typeof dummy);
  };

  // 취소 버튼 눌렀을 때
  const handleClear = (num: number) => {
    setEdit(false);
    setDummy(undefined);
    if (num === 1) setInsert(false);
  };

  // 연락처 입력
  const handleSubmit = async () => {
    if (dummy) {
      await postSubmit(dummy);
      getData();
      setSelected(dummy);
      //setNewItem(true);
    }
  };

  // 입력 API
  const postSubmit = (data: any) => {
    const url = 'http://localhost:8080/contacts/';

    const result = axios({
      method: 'POST',
      url,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: JSON.stringify(data),
    });

    return new Promise((resolve, reject) => {
      result
        .then(({ data: { resultData } }) => {
          resolve(resultData);
        })
        .catch(reject);
    });
  };

  // 연락처 수정
  const handleModify = async () => {
    if (dummy) {
      await pupModify(dummy);
      getData();
      setEdit(false);
      setSelected(dummy);
    }
  };

  // 수정 API
  const pupModify = (data: any) => {
    const url = 'http://localhost:8080/contacts/' + data.id;

    const result = axios({
      method: 'PUT',
      url,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: JSON.stringify(data),
    });

    return new Promise((resolve, reject) => {
      result
        .then(({ data: { resultData } }) => {
          resolve(resultData);
        })
        .catch(reject);
    });
  };

  // 연락처 삭제
  const handleDelete = async (e: MouseEvent<HTMLButtonElement> | undefined) => {
    const delMsg = confirm("'" + selected?.name + "'" + '님의 연락처를 정말 삭제하시겠습니까?');
    if (delMsg == true) {
      await deleteList(selected?.id);
      getData();
      setEdit(false);
      setSelected(undefined);

      alert('연락처가 삭제되었습니다.');
    }
    return delMsg;
  };

  // 삭제 API
  const deleteList = (id: any) => {
    const url = 'http://localhost:8080/contacts/' + id;

    const result = axios({
      method: 'DELETE',
      url,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: JSON.stringify({ id: id }),
    });

    return new Promise((resolve, reject) => {
      result
        .then(({ data: { resultData } }) => {
          resolve(resultData);
        })
        .catch(reject);
    });
  };

  // console.log('Selected: ');
  // console.log(selected);
  // console.log('Dummy: ');
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
                <li>기타: {dummy ? dummy?.detail : selected.detail}</li>
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
                  기타: <input type="text" name="detail" value={dummy?.detail} onChange={handleChange} />
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
              이름: <input type="text" name="name" onChange={handleChange} />
            </li>
            <li>
              나이: <input type="text" name="age" onChange={handleChange} />
            </li>
            <li>
              기타: <input type="text" name="detail" onChange={handleChange} />
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
