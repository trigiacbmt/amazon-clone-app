import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3jdVR2lB9in8OyxtIm07XiRg7JCMC-mM",
    authDomain: "app-40eab.firebaseapp.com",
    projectId: "app-40eab",
    storageBucket: "app-40eab.appspot.com",
    messagingSenderId: "485054702236",
    appId: "1:485054702236:web:c4794ab1be434d92628359",
    measurementId: "G-M1WGP9DC4M"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore(app)

export {db};