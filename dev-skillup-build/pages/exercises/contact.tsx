import React, { useState } from 'react';
import SearchBox from '../../src/contact/SearchBox';
import ContactList from '../../src/contact/ContactList';
import Info from '../../src/contact/Info';
import Empty from '../../src/contact/Empty';
import { IList } from '../../src/contact/types/types';

const Contact = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [selected, setSelected] = useState<IList | undefined>();

  const changeKeyword = (keyword: any) => {
    setKeyword(keyword);
    setSelected(undefined);
  };

  const selectList = (info: any) => {
    setSelected(info);
  };

  return (
    <div className="container ex-contact">
      <h1 className="subject">김동혁의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox keyword={keyword} changeKeyword={changeKeyword} />
          <ContactList keyword={keyword} selected={selected} selectList={selectList} />
        </div>
        <div className="col right">
          <div className="details">{selected ? <Info keyword={keyword} selected={selected} /> : <Empty />}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
