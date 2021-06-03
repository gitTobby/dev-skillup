import React from 'react';

const Info = ({ selected }) => {
  return (
    <ul className="info">
      <li>이름: {selected.name}</li>
      <li>나이: {selected.age}</li>
      <li>기타: {selected.etc}</li>
    </ul>
  );
};

export default Info;
