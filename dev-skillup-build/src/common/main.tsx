import Snb from './snb';

const Main = ({ snb, openSnb, children }: any) => {
  const handleClick = () => {
    openSnb(false);
  };

  const closeSnb = () => {
    openSnb(false);
  };

  return (
    <main className={snb === true ? 'snb-open' : ''}>
      <Snb snb={snb} closeSnb={closeSnb} />
      {children}
      {snb === true ? <div className="dimmed" onClick={handleClick}></div> : ''}
    </main>
  );
};

export default Main;
