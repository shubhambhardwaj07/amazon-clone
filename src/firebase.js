import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBWNjtGNh4ayDrWe2o0l7Vs3Z1nCgS-3Y',
  authDomain: 'clone-e37b7.firebaseapp.com',
  projectId: 'clone-e37b7',
  storageBucket: 'clone-e37b7.appspot.com',
  messagingSenderId: '918889759586',
  appId: '1:918889759586:web:8a5824c2d0b65c5ab3a23b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
