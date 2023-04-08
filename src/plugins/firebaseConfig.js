import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBskO_3xIBlcydM4cHq4UN_wg_ei8TmdNw",
  authDomain: "vue-a01770619.firebaseapp.com",
  projectId: "vue-a01770619",
  storageBucket: "vue-a01770619.appspot.com",
  messagingSenderId: "681985049543",
  appId: "1:681985049543:web:c13683032db390ea7c8fe2",
  measurementId: "G-MKTHJWE0CY"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore;
