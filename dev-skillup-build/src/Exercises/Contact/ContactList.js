import React from 'react';
import lists from './data/lists';

const ContactList = ({ keyword, selected, selectList }) => {
  const handleClick = (list) => {
    const info = list;
    selectList(info);
  };

  return (
    <div className="contact-list">
      <ul>
        {lists
          .filter((list) => list.name.indexOf(keyword) !== -1)
          .map((list, index) => (
            <li key={index}>
              <button
                type="button"
                className={selected === list ? 'selected' : ''}
                onClick={() => handleClick(list)}
              >
                {list.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
