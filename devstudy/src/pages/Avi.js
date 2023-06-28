import { useLocation } from 'react-router-dom';
import Url from '../components/Url';
import Card from '../components/Card';
import { useLocalStorageData } from '../constants/useLocalStorageData';


function Avi(){
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const subject=searchParams.get('subject');
    //로컬스토리지 저장 데이터 선언
    const card=useLocalStorageData();
    //현재 주소의 subject와 동일한 subject 값을 필터링하고
    //주어진 subject와 일치하는 데이터를 필터링하여 중복 제거
    const filteredCards = card.filter((data, index) => {
        return (
        data.subject === subject &&
        card.findIndex((d) => d.subject === data.subject) === index
        );
    });

    return(
        <>
            <div id="avi-box">
                <div className="wrap">
                    <div className="boerder-top"></div>
                    <Url/>
                </div>
                <div id="avi-list">
                    <div className="boerder-top"></div>
                    <div id="scroll-box">
                        <div id="list-box">
                            {/* {filteredCards.map(card => (
                                <Card key={card.id} subject={card.subject} />
                            ))} */}
                            {filteredCards.map(data=>(
                                <Card key={data.id} subject={data.subject}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avi;