// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCNRcuyouPKpsPZEN3PIgQiy3QYjE206rQ',
	authDomain: 'clone-de048.firebaseapp.com',
	projectId: 'clone-de048',
	storageBucket: 'clone-de048.appspot.com',
	messagingSenderId: '947558339770',
	appId: '1:947558339770:web:630b531fbc4a4743771e83',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
