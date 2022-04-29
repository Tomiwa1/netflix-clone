import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKybhXHAv-pSyFrKKKUezqb4r5u7iMaHg',
  authDomain: 'netflix-clone-46f50.firebaseapp.com',
  projectId: 'netflix-clone-46f50',
  storageBucket: 'netflix-clone-46f50.appspot.com',
  messagingSenderId: '516406443587',
  appId: '1:516406443587:web:c29d7d6e6b8c246d97def6'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
