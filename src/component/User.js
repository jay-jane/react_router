import { /* useLocation, */ useSearchParams } from "react-router-dom";

const User = () => {
    //쿼리스트링으로 넘어오는 값 받기
    //1 - useLocation 훅
    //객체 안에 쿼리스트링 값은 분해해서 사용해야 함
    // const location = useLocation();
    // console.log(location);

    //2 - useSearchParams 훅 - 주로 사용함
    //배열 반환 [값을 조회하거나 수정하는 get/set, 쿼리스트링을 업데이트하는 함수]
    const [obj, setObj] = useSearchParams();
    let id = obj.get("id");
    let age = obj.get("age");

    //쿼리스트링 강제로 변경하기
    const handleClick = () => {
        let num = parseInt(age) + 1;
        setObj({id: "변경", age: num});
    }

    return (
        <div>
            <h3>유저</h3>
            쿼리스트링으로 넘어온 id 값 : {id}<br/>
            쿼리스트링으로 넘어온 age 값 : {age}<br/>
            <button onClick={handleClick}>쿼리스트링 강제 수정</button>
        </div>
    )
}

export default User;