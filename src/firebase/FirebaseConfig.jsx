// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvgASSvqHf_51xAmTTZUm1mmNTePIbRXg",
  authDomain: "e-commerce-73629.firebaseapp.com",
  projectId: "e-commerce-73629",
  storageBucket: "e-commerce-73629.appspot.com",
  messagingSenderId: "495485540441",
  appId: "1:495485540441:web:9eba3697fe000ba9b9b948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}