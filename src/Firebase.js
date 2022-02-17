import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDCIc5YTA23z1nBIv2XdCMw5HQZxlp1m7E",

  authDomain: "mirror-d02ba.firebaseapp.com",

  projectId: "mirror-d02ba",

  storageBucket: "mirror-d02ba.appspot.com",

  messagingSenderId: "439813390800",

  appId: "1:439813390800:web:4f2a44cc91b1b8912f79d5",

  measurementId: "G-RZTRDSDKZK"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };