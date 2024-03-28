import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrMQoaAdsOIPW06TAEDJ4onIPPUdz6ThQ",
  authDomain: "group9backend-8bc31.firebaseapp.com",
  projectId: "group9backend-8bc31",
  storageBucket: "group9backend-8bc31.appspot.com",
  messagingSenderId: "1042375639974",
  appId: "1:1042375639974:web:1227f0904a00eaeb470567",
  measurementId: "G-1WFZ1HRCKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
