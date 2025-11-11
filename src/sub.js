import logo from './logo.svg';
import './App.css';
// 사용자의 사용 환경(디바이스)에 따른 화면 구분
import { BrowserView, MobileView } from 'react-device-detect';
import { Route, Routes, Link, Switch } from 'react-router-dom';

const Header = ( props ) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {props.device}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

const Sub = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <BrowserView>
              <Header device="서브 페이지 / PC 버전"></Header>
            </BrowserView>
            <MobileView>
              <Header device="서브 페이지 / 모바일 버전"></Header>
            </MobileView>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default Sub;
