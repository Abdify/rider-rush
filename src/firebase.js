import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDGeNwl6KBai76WHWMT5MwMwr-260P6VVw",
    authDomain: "rider-rush.firebaseapp.com",
    projectId: "rider-rush",
    storageBucket: "rider-rush.appspot.com",
    messagingSenderId: "452353844713",
    appId: "1:452353844713:web:1a9663781b1388b6e39778",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
