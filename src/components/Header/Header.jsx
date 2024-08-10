import { Link } from 'react-router-dom';
import logo from '../../assets/LogoPortfolio.png'
import styles from './Header.module.css'

export default function Header() {
 return (
   <header>
        <img src={logo} height={50}/> 
        <Link to="/">AR-Dev</Link>
        <Link to="/blog"> Blog</Link>
        <Link to="/contato">Contato</Link>
   </header>
 );
}