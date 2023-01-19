import { /* Link, */ NavLink, Outlet/* , redirect */ } from "react-router-dom";

const Board = () => {

    const styled = {color: "red", backgroundColor: "gold"};

    return (
        <div>
            <h3>글 목록 페이지</h3>

            <ul>
                {/* <li><Link to="/board/1">글1</Link></li>
                <li><Link to="/board/2">글2</Link></li>
                <li><Link to="/board/3">글3</Link></li> */}

                {/* NavLink는 {isActive: boolean}을 함수의 매개변수로 사용할 수 있게 전달해줌
                    반드시 {isActive} 변수로 구조 분해 할당해야 함 */}
                <li><NavLink to="/board/1" style={({isActive}) => isActive ? styled : null}>글1</NavLink></li>
                <li><NavLink to="/board/2" style={({isActive}) => isActive ? styled : null}>글2</NavLink></li>
                <li><NavLink to="/board/3" style={({isActive}) => isActive ? styled : null}>글3</NavLink></li>
            </ul>

            {/* 하위 라우터가 표기됨 */}
            <Outlet />
        </div>
    )
}

export default Board;