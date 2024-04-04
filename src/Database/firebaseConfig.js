//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrMQoaAdsOIPW06TAEDJ4onIPPUdz6ThQ",
  authDomain: "group9backend-8bc31.firebaseapp.com",
  projectId: "group9backend-8bc31",
  storageBucket: "group9backend-8bc31.appspot.com",
  messagingSenderId: "1042375639974",
  appId: "1:1042375639974:web:1227f0904a00eaeb470567",
  measurementId: "G-1WFZ1HRCKR",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreConfig = getFirestore(app);
const storageConfig = getStorage(app);

export { auth, firestoreConfig, storageConfig };
