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
		getUser()
	}, [nome])
	
	const getUser = () =>{
		if(nome !== ''){
			const user = JSON.parse(localStorage.getItem('user'));
			console.log('user', user)
			if(user){
				updateUid(user.id);
				updateNome(user.nome);
				setIsLogged(true);
			}
		}
	}

	const handleLogout = async () => {
		localStorage.clear();
		updateUid('');
		updateNome('');
		navigate("/blog");
		setIsLogged(false);
	}

	return (
		<header>
			<img src={logo} height={50} />
			<Link to="/">AR-Dev</Link>
			<Link to="/blog"> Blog</Link>
			<Link to="/contato">Contato</Link>
			<Link to="/editor">Área do Editor</Link>
			<div className={styles.logoutArea}>
			{ !isLogged ? (<></>) : 
					<>
						<p>Bem vindo: {nome}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				}
			</div>
			
		</header>
	);
}