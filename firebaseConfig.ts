import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVQMNpiHGfdZjKw6MXzzStGSqxZ17DiU0",
    authDomain: "pizzeriaapp-da751.firebaseapp.com",
    projectId: "pizzeriaapp-da751",
    storageBucket: "pizzeriaapp-da751.firebasestorage.app",
    messagingSenderId: "77166795063",
    appId: "1:77166795063:web:4cd2c393128152679622b2",
    measurementId: "G-CH4YJR6QET"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);