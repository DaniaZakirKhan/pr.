 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged , sendEmailVerification, signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



 const firebaseConfig = {
   apiKey: "AIzaSyA-Vc-UszsJUhsMQwgROxYzvJ1SZWgotSE",
   authDomain: "prac-9d066.firebaseapp.com",
   projectId: "prac-9d066",
   storageBucket: "prac-9d066.firebasestorage.app",
   messagingSenderId: "804506839153",
   appId: "1:804506839153:web:52758154ee66d820ed53d0",
   measurementId: "G-H5PD9R2FK8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 export {auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut} 