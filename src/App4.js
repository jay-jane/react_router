import axios from "axios";
import { Fragment, useState } from "react";

const App = () => {
    /*
    Axios
     -Axios는 비동기를 편하게 처리하는 라이브러리 (fetch로 사용해도 무방함)
     -Axios는 get(), post()함수 제공, 사용했을 때 Promise 리턴
     -설치 : npm add axios
    */
    const [data, setData] = useState();

    //async, await의 장점
    // 1. 코드가 간결해짐
    // 2. 동기적인 호출 방식 보장
    const handleClick = async () => {
        console.log(1);

        let result = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        console.log(result.data);

        console.log(2);

        let result2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        console.log(result2.data);

        console.log(3);

        let result3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        console.log(result3.data);
        
        console.log(4);
    }

    //순서대로 실행하고 싶을 때
    // const handleClick = () => {
    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //         .then(response => {
    //             console.log(response.data);
    //             console.log(1);

    //             axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //                 .then(response => {
    //                     console.log(response.data);
    //                     console.log(2);

    //                     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //                         .then(response => {
    //                             console.log(response.data);
    //                             console.log(3);
    //                         });
    //                 });
    //         });
    // }

    //순서가 일정하지 않음
    // const handleClick = () => {
    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //         .then(response => {
    //             console.log(response.data);
    //             console.log(1);
    //         });
    //     console.log(2);
    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //         .then(response => {
    //             console.log(response.data);
    //             console.log(3);
    //         });
    //     console.log(4);
    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //         .then(response => {
    //             console.log(response.data);
    //             console.log(5);
    //         });
    //     console.log(6);
    // }

    return (
        <Fragment>
            <h3>엑시오스로 데이터 가져오기</h3>
            <button onClick={handleClick}>데이터 가져오기</button>
            {
                data && <div><hr />
                    id : {data.userId}<br />
                    pw : {data.userPw}<br />
                    이름 : {data.userName}<br />
                </div>
            }
        </Fragment>
    )
}

export default App;