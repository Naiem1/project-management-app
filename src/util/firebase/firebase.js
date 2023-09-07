import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const Provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  return signInWithPopup(auth, Provider);
};

export const singOut = () => {
  return signOut();
};
