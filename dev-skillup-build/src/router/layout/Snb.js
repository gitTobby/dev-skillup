import React from 'react';
import { Link } from 'react-router-dom';

const Snb = ({ closeSnb }) => {
  const handleClick = () => {
    closeSnb(false);
  };

  return (
    <aside>
      <h2 className="snb-title">
        <Link to={'#'}>Dev-Skillup</Link>
      </h2>
      <nav>
        <ul className="menu-lists">
          <li>
            <Link to={'/Exercises/Top'} onClick={handleClick}>
              Top
            </Link>
          </li>
          <li>
            <Link to={'/Exercises/Counter'} onClick={handleClick}>
              Counter
            </Link>
          </li>
          <li>
            <Link to={'/Exercises/Contact'} onClick={handleClick}>
              Contact Lists
            </Link>
          </li>
          <li>
            <Link to={'/Exercises/RealGrid2'} onClick={handleClick}>
              RealGrid2
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Snb;
