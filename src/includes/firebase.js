import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCB8gcrObmZUgLvAaxw1YvZ5dsWvsvMA2Y',
  authDomain: 'music-6afe7.firebaseapp.com',
  projectId: 'music-6afe7',
  storageBucket: 'music-6afe7.appspot.com',
  messagingSenderId: '354319152807',
  appId: '1:354319152807:web:03060d2b07290cca1f0d82',
  measurementId: 'G-KE3HK1P1NL',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
};
