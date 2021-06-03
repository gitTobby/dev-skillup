import React, { useState } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';

const AppRouter = () => {
  const [snb, setSnb] = useState(false);

  const openSnb = (status) => {
    setSnb(status);
  };

  return (
    <>
      <Header snb={snb} openSnb={openSnb} />
      <Main snb={snb} openSnb={openSnb} />
    </>
  );
};

export default AppRouter;
