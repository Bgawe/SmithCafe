// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCigTfhk9hoUBRd4i4ccTt96Rx4NH-jZOg",
  authDomain: "smith-cafe.firebaseapp.com",
  projectId: "smith-cafe",
  storageBucket: "smith-cafe.appspot.com",
  messagingSenderId: "455972738825",
  appId: "1:455972738825:web:b6fae4d9ca4917fca9e5d8",
  measurementId: "G-Z7EZ54Z0KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);