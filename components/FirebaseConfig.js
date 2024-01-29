// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB3Wj2bu6bccy0ntxsF3AVgzJik3IPn9cQ",
  authDomain: "netflixclone-f2441.firebaseapp.com",
  projectId: "netflixclone-f2441",
  storageBucket: "netflixclone-f2441.appspot.com",
  messagingSenderId: "539701471679",
  appId: "1:539701471679:web:89f60dd999ab10f28d990a",
  measurementId: "G-29MEMD1CNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);