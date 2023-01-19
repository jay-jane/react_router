import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {

    //첫 번째 렌더링 과정에서는 사용할 수 없다
    // let nav = useNavigate();
    // let loginYN = false;
    // if(loginYN === false) {
    //     nav('/');
    // }

    //replace={true} - 기록을 남기지 않음
    let loginYN = false;
    if(loginYN === false) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div>
            권한 있는 사람만 접근 가능
        </div>
    )
}

export default MyPage;