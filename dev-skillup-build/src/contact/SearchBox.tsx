import React, { ChangeEvent } from 'react';

interface IContactProps {
  keyword: string;
  changeKeyword: (value: string) => void;
}

const SearchBox = ({ keyword, changeKeyword }: IContactProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeKeyword(e.target.value);
  };

  return (
    <div className="search-box">
      <input type="text" className="inp-sch" onChange={handleChange} value={keyword} placeholder="검색어를 입력하세요." />
    </div>
  );
};

export default SearchBox;
