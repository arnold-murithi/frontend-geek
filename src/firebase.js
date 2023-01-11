import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-G25JTy6jv6gxZKFUBmY9Z8qJW78XzMY",
    authDomain: "trial-auth-f302f.firebaseapp.com",
    projectId: "trial-auth-f302f",
    storageBucket: "trial-auth-f302f.appspot.com",
    messagingSenderId: "1086984848352",
    appId: "1:1086984848352:web:03875b643e867b7f806185"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  