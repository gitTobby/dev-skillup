import React from 'react';
import Snb from './Snb';
import Switcher from './Switcher';

const Main = ({ snb, openSnb }) => {
  const handleClick = () => {
    openSnb(false);
  };

  const closeSnb = () => {
    openSnb(false);
  };

  return (
    <main className={snb === true ? 'snb-open' : ''}>
      <Snb snb={snb} closeSnb={closeSnb} />
      <Switcher />
      {snb === true ? <div className="dimmed" onClick={handleClick}></div> : ''}
    </main>
  );
};

export default Main;
