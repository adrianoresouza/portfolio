import { Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Contato from './pages/Contato/Contato';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Editor from './components/Editor/Editor';

const ProtectedRoute = ({ children }) =>{
  const user = localStorage.getItem('user');
  if(user == null){
    return <Navigate to="/login"/>
  }
  return children;
}

function App() {
  return (
  <Routes>
    <Route exact path='/' Component={HomePage}/>
    <Route exact path='/contato' Component={Contato}/>
    <Route exact path='/blog' Component={Blog}/>
    <Route 
      exact 
      path='/editor' 
      element={
        <ProtectedRoute>
            <Editor/>
        </ProtectedRoute>
      } 
    />
    <Route exact path='/login' Component={Login}/>
  </Routes>
  );
}

export default App;
