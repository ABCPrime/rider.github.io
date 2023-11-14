firebase.initializeApp({
    apiKey: "AIzaSyAA2BvQX814OOEkp6bM20ibnttwyMF_Itg",
    authDomain: "travelrider-cf3c6.firebaseapp.com",
    databaseURL: "https://travelrider-cf3c6-default-rtdb.firebaseio.com/"
  });
  
  const database = firebase.database();
let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

// 按下按鈕之後產生的變化

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
	.then((result) => {
		// 登入成功，取得 token、user
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const user = result.user;
		console.log(token);
		console.log(user);
	}).catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		const credential = GoogleAuthProvider.credentialFromError(error);
		console.log(errorCode);
		console.log(errorMessage);
		console.log(credential);
	});