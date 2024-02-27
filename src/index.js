import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmW9Dgex7v3QBpwD8JuaCu8cwj7vCjnis",
  authDomain: "ecothread-e17f9.firebaseapp.com",
  projectId: "ecothread-e17f9",
  storageBucket: "ecothread-e17f9.appspot.com",
  messagingSenderId: "1061450568482",
  appId: "1:1061450568482:web:3fbcf207f7efdfbe754b7b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}