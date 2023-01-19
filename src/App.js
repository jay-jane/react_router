// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Info from './component/Info';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from './layout/Header';
import MyPage from './component/MyPage';

function App() {
  /*
  라우터 적용 방법
   1. index.js에서 브라우저 라우터로 app을 감싸주기
   2. 각각의 컴포넌트 만들기
   3. Route를 이용해서 주소 별로 컴포넌트 연결하기

  Link 컴포넌트
   - a태그를 대체함
   - to속성에 "라우터 주소" 입력
  
  쿼리스트링 ?키=값
   - useSearchParams()
  
  URL파라미터
   - 라우터 설정 /경로/:값
   - useParam()
  */

  return (
    <Routes>
      {/* 중첩라우터 - 헤더 부분 처리 (Header에서 Outlet컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} /> {/* 쿼리스트링 */}
        <Route path="/info/:num" element={<Info />} /> {/* URL 파라미터 */}
      </Route>

      {/* 각각 다른 화면 */}
      {/* <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}

      {/* 중첩 라우터 - 공통 부분 처리 - Board.js에 Outlet 컴포넌트 표기 */}
      <Route path="/board" element={<Board />}>
        <Route path=':num' element={<BoardContent />} />
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path='/mypage' element={<MyPage/>} />
    </Routes>
  );
}

export default App;
