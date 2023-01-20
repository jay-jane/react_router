import { NavLink } from "react-router-dom";

const NewsCategory = () => {

    /*
    카테고리 - 
    business
    entertainment
    general
    health
    science
    sports
    technology

     1. 카테고리 회전(map)
     2. 라우터 설정(/:)
     3. NewsList에서 라우터 값 처리(useParams())
    */
    const category = [
        { name: "all", topic: "전체" },
        { name: "business", topic: "비즈니스" },
        { name: "entertainment", topic: "연예" },
        { name: "general", topic: "일반" },
        { name: "health", topic: "건강" },
        { name: "science", topic: "과학" },
        { name: "sports", topic: "스포츠" },
        { name: "technology", topic: "기술" }
    ];

    const myStyle = {
        color: "pink",
        borderBottom: "3px solid red"
    }

    return (
        <ul>
            {
                category.map((item, index) =>
                    <li key={index}>
                        <NavLink to={item.name === 'all' ? '/' : `/${item.name}`} style={({isActive}) => isActive ? myStyle : undefined }>
                            {item.topic}
                        </NavLink>
                    </li>)
            }
        </ul>
    )
}

export default NewsCategory;