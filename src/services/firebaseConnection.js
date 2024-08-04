import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDTnDGuRX8qWtP3OdXNDYt9xpJt_iPS2Ok",
    authDomain: "portfolioblog-47480.firebaseapp.com",
    projectId: "portfolioblog-47480",
    storageBucket: "portfolioblog-47480.appspot.com",
    messagingSenderId: "568021349192",
    appId: "1:568021349192:web:db7d156067a2f333e7f97d",
    measurementId: "G-1XQEL35787"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage};