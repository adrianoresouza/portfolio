import { create } from 'zustand'

const useUserStore = create((set)=>({
    uid: '',
    nome: '',
    setUid: (uid) => set(()=>({ uid: uid})),
    setNome: (nome) => set(()=>({ nome: nome})),
}))

export default useUserStore;