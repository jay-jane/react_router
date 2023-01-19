import { useParams } from "react-router-dom";

const Info = () => {

    const data = {
        1: {name: "이이이", subject: "리액트router"},
        2: {name: "김김", subject: "리액트props"},
        3: {name: "박박", subject: "리액트state"}
    }

    //useParams()
    let param = useParams();
    // console.log(param); //URL주소에 있는 값을 키로 받아줌
    // console.log(param.num);

    const {name, subject} = data[param.num];

    return (
        <div>
            <h3>인포</h3>
            {name}님의 데이터 : {subject}
        </div>
    )
}

export default Info;