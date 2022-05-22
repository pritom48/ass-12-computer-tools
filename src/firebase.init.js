// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqpN6YIy6VoboqOcxiqodX81oxgwqXrXM",
    authDomain: "computer-tools-502a0.firebaseapp.com",
    projectId: "computer-tools-502a0",
    storageBucket: "computer-tools-502a0.appspot.com",
    messagingSenderId: "244138801880",
    appId: "1:244138801880:web:dc36985fac33cb3dad35ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;