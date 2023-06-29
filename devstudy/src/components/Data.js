import datas from '../components/datas';
import { useParams } from 'react-router-dom'
import Card from "./Card";
import RegisterClass from '../pages/RegisterClass';
import { useLocalStorageData } from '../constants/useLocalStorageData';
import Archive from './Archive';
import ManagerMode from '../pages/ManagerMode';
import '../styles/Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Data=({moveToTop})=>{
    const {dataId}=useParams();
    const data=datas.find(data=>data.id===parseInt(dataId));
    // console.log(data.isCartState)
    const cartCard=useLocalStorageData().filter(data=>data.isCartState===true);
    console.log(cartCard)
    return (
      <>
        <div className="data-wrap">
          <section key={data.id}>
              <h3 key={data.id} value={data.title} className={data.title}>
                  {data.title}
              </h3>
              <div className="wrap">
                  {data.id <= 5 && <Card subject={data.title} />}
                  {data.id === 6 && <RegisterClass />}
                  {data.id === 7 && <Archive /> }
                  {/* 찜한 순서대로 나열하는 방법찾아보기 */}
                  {data.id === 8 && <ManagerMode />}
              </div>
          </section>
        </div>
          <div className="data-btn">
              <button onClick={moveToTop}>
                  <p><FontAwesomeIcon icon={faChevronUp} className="top-btn" /></p>
                  <p>TOP</p>
              </button>
          </div>
      </>
    );
}

export default Data;