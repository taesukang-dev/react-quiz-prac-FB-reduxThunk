// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATaSswq-dfIUBp6-b1P2sQKfmHxm7qWag',
  authDomain: 'sparta-react-basic-48a73.firebaseapp.com',
  projectId: 'sparta-react-basic-48a73',
  storageBucket: 'sparta-react-basic-48a73.appspot.com',
  messagingSenderId: '829829631082',
  appId: '1:829829631082:web:218370e8c3e474c0fd8e13',
  measurementId: 'G-PTEXNP42S8',
}
initializeApp(firebaseConfig)
// Initialize Firebase
export const db = getFirestore()
