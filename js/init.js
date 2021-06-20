firebase.initializeApp({
  apiKey: "AIzaSyCRqX4GmBVGbGe2w9CU2GCZT1LgDSmIKR4",
    authDomain: "fbwebauth10.firebaseapp.com",
    projectId: "fbwebauth10",
    storageBucket: "fbwebauth10.appspot.com",
    messagingSenderId: "685889139313",
    appId: "1:685889139313:web:96df646e3c3f797d78e1d0",
    measurementId: "G-0HQBLHD2QS"
});



const txtEmail = document.getElementById('txtEmail')
   const txtPassword = document.getElementById('txtPassword')
   const btnLogin = document.getElementById('btnLogin')
   const btnSignUp = document.getElementById('btnSignUp')
   const btnLogout = document.getElementById('btnLogout')

   btnLogin.addEventListenner('click', e => {
   	const email = txtEmail.value;
   	const pass = txtPassword.value;
   	const auth = firebase.auth();

   	const promise = auth.signInWithEmailAndPassword(email, pass);
   	promise.catch(e => console.log(e.message));
   });

   btnSignUp.addEventListenner('click', e => {
   	const email = txtEmail.value;
   	const pass = txtPassword.value;
   	const auth = firebase.auth();

   	const promise = auth.createUserWithEmailAndPassword(email, pass);
   	promise.catch(e => console.log(e.message));
   });

}()); 
