// Your web app's Firebase configuration
 
  var firebaseConfig = {
   apiKey: "AIzaSyCRqX4GmBVGbGe2w9CU2GCZT1LgDSmIKR4",
    authDomain: "fbwebauth10.firebaseapp.com",
    projectId: "fbwebauth10",
    storageBucket: "fbwebauth10.appspot.com",
    messagingSenderId: "685889139313",
    appId: "1:685889139313:web:96df646e3c3f797d78e1d0",
    measurementId: "G-0HQBLHD2QS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

 let arregloUsuarios = [];
  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      var obj = doc.data()
        obj.id = doc.id;
        arregloUsuarios.push(obj);
    });
});
  
  console.log(arregloUsuarios)

  function leerDatosUsuario(){
    var id = document.getElementById("usuarioaEliminar").value

    var docRef = db.collection("usuarios").doc(id);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}


  function agregarDatos(){
    var email = document.getElementById("emailNuevoUsuario").value
    var nombre = document.getElementById("nombreNuevoUsuario").value
    var password= document.getElementById("contraseniaNuevoUsuario").value

    if (email == "" || email == null || password == "" || password == null) {
      alert("Llena los campos por favor")
    }else{
        db.collection("usuarios").add({

    Email: email,
    Contrasenia: password,
    Nombre: nombre
})
.then(function(docRef) {
    alert("El usuario se agrego correctamente")
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    }
  }
  function registrarse() {
    var email = document.getElementById("emailNuevoUsuario").value
    var password= document.getElementById("contraseniaNuevoUsuario").value
      if (email == "" || email == null || password == "" || password == null) {
        alert("Llena los campos por favor")
      } else {
        console.log("Entro a funcion registrarse")
        console.log("El correo que se va a registrar es:" + email)
        console.log("El password que se va a registrar es:" + password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
          console.log(user)
          alert("Tu cuenta se creo correctamente")
          window.location.href = "index.html"
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
      }
    }
 function iniciarSesion () {
    var email = document.getElementById("emailSesion").value
    var password= document.getElementById("contraseniaSesion").value
      if (email == "" || email == null || password == "" || password == null) {
        alert("Llena los campos por favor")
      } else {
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        alert("inicio de sesion exitoso")
        window.location.href = "index.html"
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
    }
}

   function cerrarSesion() {
      firebase.auth().signOut().then(function() {
        email = false;
        password = false;
        alert("Cerraste sesion Correctamente")
        window.location.href = "index.html"
      }).catch(function(error) {
        alert(error)
      });
    }
  


function borrarDatosUsuarios(){
  var id = document.getElementById("usuarioaEliminar").value
  db.collection("usuarios").doc(id).delete().then(function() {
    alert("Tu usuario se elimino correctamente")
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

/** conexion al sistema de autentificacion de Firebase. */
const auth = firebase.auth();
/* Google*/
const provider = new firebase.auth.GoogleAuthProvider();
/** Lista */
provider.setCustomParameters({ prompt: "select_account" });

auth.onAuthStateChanged(
 usuarioAuth => {
  email.value = usuarioAuth.email;
  email.value = usuarioAuth.displayName;
  email.value = usuarioAuth.photoURL;
 } else{
 auth.signInWithRedirect(provider);
}
}, );

async function terminaSesion(){
 try{
  await auth.signOuth();
 } catch (e) {
  procesaError (e);
 }
}
