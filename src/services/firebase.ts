import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getRemoteConfig } from "firebase/remote-config"

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCvFqqxDHgayZNp9uP87iwYDjmknd4qswA",
  authDomain: "flashcard-98a5a.firebaseapp.com",
  projectId: "flashcard-98a5a",
  storageBucket: "flashcard-98a5a.appspot.com",
  messagingSenderId: "557798046649",  
  appId: "1:557798046649:web:0edc0d0c2ddb3b0e26d468",
  measurementId: "G-JRV7LZERKZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 15000;

const firestore = getFirestore(app);
export default firestore;