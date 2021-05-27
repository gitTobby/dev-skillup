import React, { useState } from 'react';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import Info from './Info';
import Empty from './Empty';

const Contact = () => {
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState();

  const changeKeyword = (keyword) => {
    setKeyword(keyword);
    setSelected('');
  };

  const selectList = (info) => {
    setSelected(info);
  };

  return (
    <div className="container">
      <h1 className="subject">김동혁의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox keyword={keyword} changeKeyword={changeKeyword} />
          <ContactList
            keyword={keyword}
            selected={selected}
            selectList={selectList}
          />
        </div>
        <div className="col right">
          <div className="details">
            {selected ? (
              <Info keyword={keyword} selected={selected} />
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
