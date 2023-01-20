import { Fragment, useEffect, useState } from "react"

const App = () => {

    /*
    Ajax를 이용해서 외부 데이터 가져오기
     1. Promise = fetch();
    */
    const [raw, setRaw] = useState();
    const handleClick = () => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setRaw(data))
    }

    //화면이 mount된 이후 데이터 가져오기 - useEffect()
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <Fragment>
            <button onClick={handleClick}>데이터 가져오기</button><br />
            {
                raw === undefined ?
                    <div>데이터 준비중 . . .</div> :
                    <div>
                        가져온 데이터<br />
                        아이디 : {raw.userId}<br />
                        비밀번호 : {raw.userPw}<br />
                        이름 : {raw.userName}<br />
                    </div>
            }

            <h3>mount 이후 데이터 가져오기</h3>
            {
                data && <div>
                    id값 : {data.userId}<br />
                    pw값 : {data.userPw}<br />
                    name값 : {data.userName}<br />
                </div>
            }
        </Fragment>
    )
}

export default App;