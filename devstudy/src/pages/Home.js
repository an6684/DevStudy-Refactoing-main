import datas from "../components/datas";
import Card from "../components/Card"

function Home(){
    const filteredDatas=datas.filter(data=>data.id<=5);
    const moveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <>
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
            <div className="btn">
                <button onClick={moveToTop}>맨위로</button>
            </div>
        </>
    )
}

export default Home;
