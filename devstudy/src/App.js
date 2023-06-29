import './styles/App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import datas from './components/datas';
import style from './constants/active-menu';
import Avi from './pages/Avi';
import Data from './components/Data';

function App() {
  const moveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="App">
      <NavLink to="/" className='main'><h1>DevStudy</h1></NavLink>
      <ul className='list'>
        {datas.map(data=>(
          <li key={data.id}>
            <NavLink to={`/datas/${data.id}`} style={style}>{data.title}</NavLink>
          </li>
        ))}
      </ul>
      
      <Routes>
        <Route exact path="/" element={ <Home moveToTop={moveToTop}/> } />
        <Route path={"/datas/:dataId"} element={<Data moveToTop={moveToTop}/>} />
        <Route path="/avi" element={<Avi moveToTop={moveToTop}/>} />
      </Routes>

    </div>
  );
}

export default App;
