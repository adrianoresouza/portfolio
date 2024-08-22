import { useState } from 'react'
import styles from './Login.module.css'
import { auth, db } from '../../services/firebaseConnection.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc} from 'firebase/firestore'
import useUserStore from '../../stores/userStore.js'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [uid, setUid] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const navigate = useNavigate();

	const updateUid = useUserStore((state) => state.setUid)
	const updateNome = useUserStore((state)=> state.setNome)

	const  setUser = async (id) => {
		const docRef = doc(db, "users", id);
		await getDoc(docRef)
		.then((snapshot)=>{
			updateUid(id);
			updateNome(snapshot.data().nome);    
			const user = {
				id: id,
				nome: snapshot.data().nome
			}
			localStorage.setItem("user", JSON.stringify(user));  
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
			await setUser(uidReceived)
			if(uidReceived!==''){
				navigate("/editor")
			}
		})
		.catch((error) =>{
			if(error.code === 'auth/invalid-credential')
			{
				setErrorMessage('E-mail ou senha inválidos');
			}
			console.log('Erro ao autenticar: ', error.code)
		})
		
	  };

	return (
		<>
			<div className={styles.container}>
					<h1>Área de administração</h1>
					<div className={styles.loginArea}>
						<div className={styles.formLogin}>
							<input type="email" placeholder='Insira seu e-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
							<input type="password" placeholder='Insira sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
							<button onClick={HandleSubmit}>Entrar</button>
							<span>{errorMessage}</span>
						</div>
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