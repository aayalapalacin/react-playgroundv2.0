// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,"process.env.NEXT_PUBLIC_FIREBASE_API_KEY!")
console.log(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,"process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!")
console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,"process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!")
console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,"process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!")
console.log(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,"process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!")
console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,"process.env.NEXT_PUBLIC_FIREBASE_APP_ID!")
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};