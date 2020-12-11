import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDo7nnpZ_Uvx-FuRuYy3gd8AXWDnOGBj1U',
  authDomain: 'ecommerce-db-b4ef3.firebaseapp.com',
  projectId: 'ecommerce-db-b4ef3',
  storageBucket: 'ecommerce-db-b4ef3.appspot.com',
  messagingSenderId: '157502257372',
  appId: '1:157502257372:web:e18bf9d11f801cf42d5c19',
  measurementId: 'G-5BWVDM418C',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
