
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB0CAhSrx4O03ahxGHHFq5T0hQgrQ3wUHI",
    authDomain: "kinetic-98945.firebaseapp.com",
    projectId: "kinetic-98945",
    storageBucket: "kinetic-98945.appspot.com",
    messagingSenderId: "608481571003",
    appId: "1:608481571003:web:0cf9a8a2859b2cefbbb99e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)