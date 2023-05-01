// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmLFKQNVYLnaGefU-yRQIej7BTWUQKWxA",
  authDomain: "chef-recipe-hunter-clien-7ba81.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-7ba81",
  storageBucket: "chef-recipe-hunter-clien-7ba81.appspot.com",
  messagingSenderId: "398327761074",
  appId: "1:398327761074:web:9e6294c8e76844bf0421ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;