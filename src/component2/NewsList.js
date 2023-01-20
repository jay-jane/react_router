import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import styled from './NewsList.module.css'; //css

const NewsList = () => {

    //1. news API 가져오기
    //api key = 106eedeca9954d288bf8eb4dc7ed02e1

    //5. 라우터로 들어오는 값 처리
    const {category} = useParams();
    //category가 없거나 undefined이면 all
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;

    //2. useEffect에서 화면 로딩 시 데이터 처리
    const [data, setData] = useState();
    useEffect(() => { //내장 함수에 async 쓰면 안 됨
        (async () => { //즉시 실행 함수에 async
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=106eedeca9954d288bf8eb4dc7ed02e1`;
            console.log(url);
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true); //데이터를 받고 loading 값을 true로 변경
        })();
    }, [query]); //6. 변화가 발생할 때 마다 재실행할 변수

    //3. 데이터 로딩 처리 (데이터가 오기 전에 state가 undefined 상태임)
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩 . . .</div>
    }

    //4. li태그를 컴포넌트로 변경

    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    //1. url, urlToImage, title, author, description, publishedAt
                    data.map((item, index) => <NewsArticle key={index+1} item={item} />)
                }
            </ul>
        </div>
    )
}

export default NewsList;