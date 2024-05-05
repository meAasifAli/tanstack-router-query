// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7nbodBLm1eYO5b5chmgRJMrrLlXjp7jk",
    authDomain: "todo-e3b6d.firebaseapp.com",
    projectId: "todo-e3b6d",
    storageBucket: "todo-e3b6d.appspot.com",
    messagingSenderId: "129375772892",
    appId: "1:129375772892:web:06df8e7019480afb5ad419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)