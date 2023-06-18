import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMU8hlTbNYzsUT7i1yVq-GLxkX4Q_pTNI",
  authDomain: "casalaptop-4f1ea.firebaseapp.com",
  projectId: "casalaptop-4f1ea",
  storageBucket: "casalaptop-4f1ea.appspot.com",
  messagingSenderId: "632027758508",
  appId: "1:632027758508:web:cd1a040feaea5df0d14409",
  measurementId: "G-CNEKPGREPB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
