import firebase from "firebase/app";
import "firebase/firestore";
import auth from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWJi2Z_qbfjwx9zWlWByeKgaZsiZgZr8w",
  authDomain: "amica-71cf3.firebaseapp.com",
  projectId: "amica-71cf3",
  storageBucket: "amica-71cf3.appspot.com",
  messagingSenderId: "889970765246",
  appId: "1:889970765246:web:69a82c2173d45d46531def",
  measurementId: "G-SRJPYKP86P",
};

firebase.initializeApp(firebaseConfig);

firebase
  .auth()
  .signInAnonymously()
  .then((user) => {
    console.log("signed in", user);
  })
  .catch((error) => {
    console.log(error.message);
  });

let db = firebase.firestore();

export default db;
