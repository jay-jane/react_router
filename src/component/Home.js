import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h3>홈</h3>

            <ul>
                <li><Link to="/user">회원 페이지</Link></li>
                <li><Link to="/info?id=aa123&age=1">회원 정보</Link></li><br/>

                <li><Link to="/info/1">회원 정보</Link></li>
                <li><Link to="/info/2">회원 정보</Link></li>
                <li><Link to="/info/3">회원 정보</Link></li><br/>

                <li><Link to="/board">board 페이지</Link></li><br/>

                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </div>
    )
}

export default Home;