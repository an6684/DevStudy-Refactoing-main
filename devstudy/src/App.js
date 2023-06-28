import './styles/App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import datas from './components/datas';
import style from './constants/active-menu';
import Avi from './pages/Avi';
import Data from './components/Data';

function App() {

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
        <Route exact path="/" element={ <Home/> } />
        <Route path={"/datas/:dataId"} element={<Data/>} />
        <Route path="/avi" element={<Avi/>} />
      </Routes>
      
    </div>
  );
}

export default App;
