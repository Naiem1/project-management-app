import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_H7AJVKhllwVhT1U3Qo_r2tufCW3ECPI",
  authDomain: "task-manager-app-728a5.firebaseapp.com",
  projectId: "task-manager-app-728a5",
  storageBucket: "task-manager-app-728a5.appspot.com",
  messagingSenderId: "524217309375",
  appId: "1:524217309375:web:7d49b68d12f90347e84e0a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const Provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, Provider).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
}