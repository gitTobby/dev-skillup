import React from 'react';

const SearchBox = ({ keyword, changeKeyword }) => {
  const handleChange = (e) => {
    changeKeyword(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="inp-sch"
        onChange={handleChange}
        value={keyword}
        placeholder="검색어를 입력하세요."
      />
    </div>
  );
};

export default SearchBox;
