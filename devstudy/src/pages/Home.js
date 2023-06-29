import datas from "../components/datas";
import Card from "../components/Card";
import '../styles/App.css';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Home({moveToTop}){
    const filteredDatas=datas.filter(data=>data.id<=5);

    return(
        <>
            <div className="home-wrap">
                {filteredDatas.map(data=>(
                    <section key={data.id}>
                        <h3 key={data.id} value={data.title}>
                            {data.title}
                        </h3>
                        <div className="wrap">
                            <Card subject={data.title}/>
                        </div>
                    </section>
                ))}
                <div id='btn'>
                    <button onClick={moveToTop}>
                        <p><FontAwesomeIcon icon={faChevronUp} className="top-btn" /></p>
                        <p>TOP</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;
