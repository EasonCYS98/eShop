import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC0FS-igy3x-QvxGINSDr55kWjKxsr822s",
    authDomain: "eshop-d823b.firebaseapp.com",
    projectId: "eshop-d823b",
    storageBucket: "eshop-d823b.firebasestorage.app",
    messagingSenderId: "1044920470757",
    appId: "1:1044920470757:web:dc2f16ad206020b969180c",
    measurementId: "G-K7GBB2J1JY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

  