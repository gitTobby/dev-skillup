import React, { ChangeEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { keywordState, selectedState } from '../../src/contact/state/contact';
import { IList } from './types/types';

const SearchBox = () => {
  const [keyword, setKeyword] = useRecoilState<string>(keywordState);
  const setSelected = useSetRecoilState<IList | undefined>(selectedState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setSelected(undefined);
  };

  return (
    <div className="search-box">
      <input type="text" className="inp-sch" onChange={handleChange} value={keyword} placeholder="검색어를 입력하세요." />
    </div>
  );
};

export default SearchBox;
