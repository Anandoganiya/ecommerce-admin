import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL8PE7uTZS08W6Azd5IFPhDet93FPg8zg",
  authDomain: "ecommerce-admin-236c9.firebaseapp.com",
  projectId: "ecommerce-admin-236c9",
  storageBucket: "ecommerce-admin-236c9.appspot.com",
  messagingSenderId: "285248485587",
  appId: "1:285248485587:web:e58d36600660e87eebbc26",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
