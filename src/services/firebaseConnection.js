import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; 
import 'firebase/storage';



let firebaseConfig = {
    apiKey: "AIzaSyBWHh_pajRh5UPwJxBO5ljS6-NJnRQLp00",
    authDomain: "sistema-f856e.firebaseapp.com",
    projectId: "sistema-f856e",
    storageBucket: "sistema-f856e.appspot.com",
    messagingSenderId: "269022329589",
    appId: "1:269022329589:web:eb63e2d3b1d9c2845da3bc",
    measurementId: "G-66P78S2DGF"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;