import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxzvCLgvnCK1P1SQjWY1-ITTZsJ6Im7r0',
  authDomain: 'full-stack-react---blog.firebaseapp.com',
  projectId: 'full-stack-react---blog',
  storageBucket: 'full-stack-react---blog.firebasestorage.app',
  messagingSenderId: '202207096123',
  appId: '1:202207096123:web:c1376d23d9d5343a1d5b1e',
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
