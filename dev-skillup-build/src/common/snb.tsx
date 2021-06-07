import Link from 'next/link';
import React from 'react';

const Snb = ({ closeSnb }: any) => {
  const handleClick = () => {
    closeSnb(false);
  };

  return (
    <aside>
      <h2 className="snb-title">
        <Link href="/">Dev-Skillup</Link>
      </h2>
      <nav>
        <ul className="menu-lists">
          <li>
            <Link href="/exercises/top">
              <a onClick={handleClick}>Top</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/counter">
              <a onClick={handleClick}>Counter</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/contact">
              <a onClick={handleClick}>Contact Lists</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/realgrid2">
              <a onClick={handleClick}>RealGrid2</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Snb;
