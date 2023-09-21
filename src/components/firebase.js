import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2skobwYrvuxAGR-vXBsXinCYl2ZXCE4c",
  authDomain: "linkedin-clone-df07a.firebaseapp.com",
  projectId: "linkedin-clone-df07a",
  storageBucket: "linkedin-clone-df07a.appspot.com",
  messagingSenderId: "888258445392",
  appId: "1:888258445392:web:1755f876b6234ce83a5155",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
