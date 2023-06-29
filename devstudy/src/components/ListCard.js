import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLocalStorageData } from '../constants/useLocalStorageData';
import '../styles/Avi.css';

function ListCard({subject}){
    const card=useLocalStorageData();
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const title=searchParams.get('title');
    //띄어쓰기가 포함된 문자열을 url에 사용 가능한 형식으로 변환하는 함수
    const formatUrl = (string) => {
        return encodeURIComponent(string);
    };

    return(
        <>
            {card.map((data, index) => {
                //로컬스토리지의 subject와 datas.title 값이 같을 경우에만 카드 생성
                if(subject===data.subject){
                    const linkUrl = `/avi?subject=${formatUrl(data.subject)}&title=${formatUrl(data.title)}&content=${formatUrl(data.content)}`;
                    return(
                        <div key={index} className={`list-card ${data.title === title ? 'highlight' : ''}`}>
                            <Link to={linkUrl}>
                                <embed controls src={`https://img.youtube.com/vi/${data.url}/maxresdefault.jpg`} allowfullscreen></embed>
                                <div className="contents-box">
                                    <span className="title">{data.title}</span>
                                    <span className="content">{data.content}</span>
                                </div>    
                            </Link>
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
}

export default ListCard;