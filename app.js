import {auth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged , sendEmailVerification, signOut } from "./firebase.js"


let signUp = ()=>{
    let email = document.getElementById("email").value
  let password = document.getElementById("pass").value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorMessage = error.message;
    });
}