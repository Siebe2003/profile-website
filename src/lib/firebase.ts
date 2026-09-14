// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnmvgeUOmR46VKDaabp5Uia062Czh9JKA",
  authDomain: "profile-website-2554a.firebaseapp.com",
  projectId: "profile-website-2554a",
  storageBucket: "profile-website-2554a.firebasestorage.app",
  messagingSenderId: "117859201469",
  appId: "1:117859201469:web:abec1d375889bd5ed062d4",
  measurementId: "G-ZNJFD24EMR"
}

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }