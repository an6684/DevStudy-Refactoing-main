import { useLocalStorageData } from '../constants/useLocalStorageData';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Archive=()=>{
    const card=useLocalStorageData();
    const cartCard=card.filter(data => data.isCartState === true);
    // console.log(cartCard)
    // 띄어쓰기가 포함된 문자열을 url에 사용 가능한 형식으로 변환하는 함수
    const formatUrl = (string) => {
        return encodeURIComponent(string);
    };

    return (
        <>
        {cartCard.map((data, index) => {
            const linkUrl = `/avi?subject=${formatUrl(data.subject)}&title=${formatUrl(data.title)}&content=${formatUrl(data.content)}`;

            return (
            <div key={index} className="card">
                <Link to={linkUrl}>
                <span className="subject">{data.subject}</span>
                <span className="title">{data.title}</span>
                <span className="content">{data.content}</span>
                <embed controls src={`https://img.youtube.com/vi/${data.url}/maxresdefault.jpg`} allowfullscreen></embed>
                </Link>
            </div>
            );
        })}
        </>
    );
}

export default Archive;