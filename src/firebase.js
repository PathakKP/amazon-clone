// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCau7vNrIOrf7DnwoCX7sCbRXdD1EmmX98",
    authDomain: "clone-aa437.firebaseapp.com",
    projectId: "clone-aa437",
    storageBucket: "clone-aa437.appspot.com",
    messagingSenderId: "148424186001",
    appId: "1:148424186001:web:723a26efdd0b9f64d64730",
    measurementId: "G-G7CCSJJLFR"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};