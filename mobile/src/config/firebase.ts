import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKrukr1_ZFRPdaSb9Z292ken9W1Zvy_so",
    authDomain: "devint-tcc-33eb6.firebaseapp.com",
    projectId: "devint-tcc-33eb6",
    storageBucket: "devint-tcc-33eb6.appspot.com",
    messagingSenderId: "59156209685",
    appId: "1:59156209685:web:d650ab39bad85bd0346e1c",
    measurementId: "G-5M2FPX00YE"
};  

if (!firebase.apps.length) 
    firebase.initializeApp(firebaseConfig)

export default firebase
  
