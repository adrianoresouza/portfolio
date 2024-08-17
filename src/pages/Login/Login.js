import { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import styles from './Login.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../services/firebaseConnection.js'
import { doc, getDoc} from 'firebase/firestore'
import useUserStore from '../../stores/userStore.js'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [uid, setUid] = useState('')

	const navigate = useNavigate();

	const updateUid = useUserStore((state) => state.setUid)
	const updateNome = useUserStore((state)=> state.setNome)

	const  getUser = async (id) => {
		const docRef = doc(db, "users", id);
		await getDoc(docRef)
		.then((snapshot)=>{
			updateUid(id);
			updateNome(snapshot.data().nome);    
			localStorage.setItem("user", {
				id: id,
				nome: snapshot.data().nome
			});  
		})
		.catch((error)=>{
			console.log('Error: ', error)
		})
	}

	const HandleSubmit = async () => {
		let uidReceived = ''
		await signInWithEmailAndPassword(auth, email, password)
		.then( async ( value )=>{
			uidReceived = value.user.uid
		})
		.catch((error) =>{
			console.log('Erro ao autenticar: ', error)
		})
		setUid(uidReceived);	
		updateUid(uidReceived)
		let user = getUser(uidReceived)
		if(uidReceived!==''){
			navigate("/editor")
		}
	  };

	return (
		<>
			<Header/>
			<div className={styles.container}>
					<h1>Área de administração</h1>
					<div className={styles.loginArea}>
						<div className={styles.formLogin}>
							<input type="email" placeholder='Insira seu e-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
							<input type="password" placeholder='Insira sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
							<button onClick={HandleSubmit}>Entrar</button>
						</div>
						{uid}
						{/* <form  onSubmit={HandleSubmit}>
							<input type="email" placeholder='Insira seu e-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
							<input type="password" placeholder='Insira sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
							<button type='submit'>Entrar</button>
						</form> */}
					</div>
					
			</div>
		</>
	);
}