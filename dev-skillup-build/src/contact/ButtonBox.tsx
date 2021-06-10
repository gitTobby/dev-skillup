import React, { MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { insertState, selectedState, dummyState } from '../../src/contact/state/contact';
import { IList } from './types/types';

const ButtonBox = () => {
  const setInsert = useSetRecoilState<boolean>(insertState);
  const setSelected = useSetRecoilState<IList | undefined>(selectedState);
  const setDummy = useSetRecoilState<IList | undefined>(dummyState);

  // 연락처 추가 버튼 눌렀을 때
  const handleClick = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    setDummy(undefined);
    setSelected(undefined);
    setInsert(true);
  };

  return (
    <div className="btn-group">
      <button type="button" className="btn" onClick={handleClick}>
        연락처 추가
      </button>
    </div>
  );
};

export default ButtonBox;
