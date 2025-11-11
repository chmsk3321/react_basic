import './App.css';
// 사용자의 사용 환경(디바이스)에 따른 화면 구분
import { BrowserView, MobileView } from 'react-device-detect';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <BrowserView>
              <Header device="메인 페이지 / PC 버전"></Header>
            </BrowserView>
            <MobileView>
              <Header device="메인 페이지 / 모바일 버전"></Header>
            </MobileView>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
