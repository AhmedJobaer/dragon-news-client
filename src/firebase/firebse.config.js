// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt7PrOu4hr2CRcShZIM2Fwq1askzIJY6Q",
    authDomain: "drogon-news-6ce3c.firebaseapp.com",
    projectId: "drogon-news-6ce3c",
    storageBucket: "drogon-news-6ce3c.appspot.com",
    messagingSenderId: "864237378259",
    appId: "1:864237378259:web:c86302fa0a7ffdefe31226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;