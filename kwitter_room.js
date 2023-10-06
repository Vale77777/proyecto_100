
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVteZsCv6nHE9KLkqF6aDtg0dqVqjMGcQ",
  authDomain: "kwitter-b4761.firebaseapp.com",
  projectId: "kwitter-b4761",
  storageBucket: "kwitter-b4761.appspot.com",
  messagingSenderId: "1026712870432",
  appId: "1:1026712870432:web:083c3e988281ce8f666645"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
