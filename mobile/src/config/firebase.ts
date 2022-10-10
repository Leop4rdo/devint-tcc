import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {

    apiKey: "AIzaSyDTPU7UOIi424-11B4MA_Kr50pmu_BNY7c",
  
    authDomain: "devint-tcc.firebaseapp.com",
  
    projectId: "devint-tcc",
  
    storageBucket: "devint-tcc.appspot.com",
  
    messagingSenderId: "378917226322",
  
    appId: "1:378917226322:web:3f3dd509ee6daa7e009c8b",
  
    measurementId: "G-97H549R7SL"
  
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
  
