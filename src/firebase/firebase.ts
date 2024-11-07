// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiTYscDw_svVXcvCtcmDQJUvW6jutLYhE',
  authDomain: 'react-test-app-2-1d5d7.firebaseapp.com',
  projectId: 'react-test-app-2-1d5d7',
  storageBucket: 'react-test-app-2-1d5d7.firebasestorage.app',
  messagingSenderId: '806763128258',
  appId: '1:806763128258:web:76c92f7157bbdecda3a25b',
  measurementId: 'G-8S5XMXWZMF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
