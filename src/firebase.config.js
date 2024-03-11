//Firebase.config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOowjnDYNOud9zxJPFeyMMQktcGSEDakg",
  authDomain: "forumviajeros.firebaseapp.com",
  projectId: "forumviajeros",
  storageBucket: "forumviajeros.appspot.com",
  messagingSenderId: "421622609869",
  appId: "1:421622609869:web:e3426c8b0625450df0b684",
  measurementId: "G-GR3TNH70ZQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };