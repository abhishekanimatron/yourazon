import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTPsJuaUqDMZLVN8-B0Gbg8FoJLbrz80Y",
  authDomain: "aurange-fa594.firebaseapp.com",
  projectId: "aurange-fa594",
  storageBucket: "aurange-fa594.appspot.com",
  messagingSenderId: "934005695664",
  appId: "1:934005695664:web:cf0f73912d4a68f82b4775",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export default db;
