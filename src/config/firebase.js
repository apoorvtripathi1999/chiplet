import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDas_J2ocxNe9rziNE6Iwc2ASVBorRyvsk",
  authDomain: "chiplet-84c3f.firebaseapp.com",
  projectId: "chiplet-84c3f",
  storageBucket: "chiplet-84c3f.appspot.com",
  messagingSenderId: "275625437445",
  appId: "1:275625437445:web:2ee2186682a4146876af6c",
  measurementId: "G-K5ZY6Z28HC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider()
// export default auth;
