// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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

export { app, analytics };