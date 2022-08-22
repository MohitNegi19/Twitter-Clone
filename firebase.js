import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRjkSpufw54E3kHFfSgq41RsUzvqaCqco",
    authDomain: "twitter-clone-954d4.firebaseapp.com",
    projectId: "twitter-clone-954d4",
    storageBucket: "twitter-clone-954d4.appspot.com",
    messagingSenderId: "125689780819",
    appId: "1:125689780819:web:81ac85209d560cef2584a6",
    measurementId: "G-263452ES0C"
  };
  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };