import { Route, Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Contato from './pages/Contato/Contato';

function App() {
  return (
  <Routes>
    <Route exact path='/' Component={HomePage}/>
    <Route exact path='/contato' Component={Contato}/>
  </Routes>
  );
}

export default App;
