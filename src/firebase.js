import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlpsnuHZFruafGGFtEEfSCyTykIOLq0ko",
  authDomain: "clone-4e128.firebaseapp.com",
  projectId: "clone-4e128",
  storageBucket: "clone-4e128.appspot.com",
  messagingSenderId: "723876724679",
  appId: "1:723876724679:web:89c652b553e5e1e4f6e3e2",
  measurementId: "G-9MCBX5NL3C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
