// Import the functions you need from the SDKs you need

import * as firebase from "firebase";

import 'firebase/firestore';
import 'firebase/storage';
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q51mkkuaN4YC5U4ZyFCIYqnHuxNxYlY",
  authDomain: "yp-math.firebaseapp.com",
  projectId: "yp-math",
  storageBucket: "yp-math.appspot.com",
  messagingSenderId: "645883509246",
  appId: "1:645883509246:web:fd5713585b0b7767fe28af"
};

// Initialize Firebase
let app;
 app = firebase.initializeApp(firebaseConfig);
//  if (firebase.app.length === 0) {
//  }else {
  // app = firebase.app()
//  }

const auth = firebase.auth()
const storage = firebase.storage()
const firestore = firebase.firestore()
export { auth, storage, firestore};
