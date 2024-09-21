import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: " AIzaSyD-TGjsf3ptDAuIhWcENYkeb2LwQy4LP78",
  authDomain: "fti-nexus-7abf3.firebaseapp.com",
  projectId: "fti-nexus-7abf3",
  storageBucket: "fti-nexus-7abf3.appspot.com",
  messagingSenderId: "97759714423",
  appId: "1:97759714423:web:02597daec8b7b60bea3a72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
