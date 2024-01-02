import { initializeApp } from 'firebase/app';

// TODO: Import the specific Firebase modules you need
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqmvNbwu7nHmNEvuAe_1OViHjWF6HDpsc",
  authDomain: "vue-blog-b2093.firebaseapp.com",
  projectId: "vue-blog-b2093",
  storageBucket: "vue-blog-b2093.appspot.com",
  messagingSenderId: "299857796873",
  appId: "1:299857796873:web:e76828821f9bbff8a3bdd8",
  measurementId: "G-RQ9SRNW22K"
};

const app = initializeApp(firebaseConfig);

// TODO: Export additional Firebase services if needed
export const db = getFirestore(app);

export default app;
