import { create } from 'zustand'
import { auth, db } from '../services/firebaseConnection'

import { doc, getDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const useUserStore = create((set)=>({
    uid: '',
    nome: '',
    setUid: (uid) => set(()=>({ uid: uid})),
    setNome: (nome) => set(()=>({ nome: nome})),
}))

export default useUserStore;