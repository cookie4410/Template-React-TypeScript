import React, { useEffect, useMemo, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/App.css';

// デバッグラインを消すときは次の行をコメントアウトする
// import './css/debugLine.css';

const App: React.VFC = () => {
  const routeLocation = useLocation();
  const pathName = useMemo(() => routeLocation.pathname, [routeLocation]);
  const searchName = useMemo(() => routeLocation.search, [routeLocation]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName, searchName]);

  return (
    <div className="app-screen">
      <Suspense fallback={<div />}>
        <Header className="header" />
        <Main className="main" />
        <Footer className="footer" />
      </Suspense>
    </div>
  );
};

export default App;
