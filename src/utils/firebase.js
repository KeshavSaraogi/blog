// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1BjDrQ313S3hAIDVtcGUj6DBX6zWqNN0",
  authDomain: "blog-webapp-6dded.firebaseapp.com",
  projectId: "blog-webapp-6dded",
  storageBucket: "blog-webapp-6dded.appspot.com",
  messagingSenderId: "221569315732",
  appId: "1:221569315732:web:61b53dcba7fa0191da1581",
  measurementId: "G-T4J71TJR09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);