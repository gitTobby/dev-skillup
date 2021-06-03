import React from 'react';

const Header = ({ snb, openSnb }) => {
  const handleClick = () => {
    if (snb === true) openSnb(false);
    else openSnb(true);
  };

  return (
    <header>
      <div className="split">
        <button type="button" className="btn btn-menu" onClick={handleClick}>
          <svg viewBox="0 0 24 24" className="icon-svg">
            <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
          </svg>
          <span className="blind">Menu</span>
        </button>
        <h1 className="title">Dev-Skillup</h1>
      </div>
    </header>
  );
};

export default Header;
