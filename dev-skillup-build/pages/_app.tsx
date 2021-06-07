import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../src/common/Header';
import Main from '../src/common/main';
import '../styles/app.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [snb, setSnb] = useState<boolean>(false);

  const openSnb = (status: any) => {
    setSnb(status);
  };

  return (
    <RecoilRoot>
      <Header snb={snb} openSnb={openSnb} />
      <Main snb={snb} openSnb={openSnb}>
        <Component {...pageProps} />
      </Main>
    </RecoilRoot>
  );
};
export default MyApp;
