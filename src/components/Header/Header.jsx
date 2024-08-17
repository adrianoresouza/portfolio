import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/LogoPortfolio.png'
import useUserStore from '../../stores/userStore';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
	const navigate = useNavigate();
	const[isLogged, setIsLogged] = useState(false);
	const nome = useUserStore((state) => state.nome);
	const updateUid = useUserStore((state) => state.setUid);
	const updateNome = useUserStore((state) => state.setNome);

	useEffect(() => {
		
	  if(nome !== ''){
		setIsLogged(true);
	  }
	}, [])
	

	const handleLogout = async () => {
		localStorage.clear();
		updateUid('');
		updateNome('');
		navigate("/blog")
	}

	return (
		<header>
			<img src={logo} height={50} />
			<Link to="/">AR-Dev</Link>
			<Link to="/blog"> Blog</Link>
			<Link to="/contato">Contato</Link>
			{ !isLogged ? (<></>) : 
				<>
					<p>Bem vindo: {nome}</p>
					<button onClick={handleLogout}>Logout</button>
				</>
			}
			
		</header>
	);
}