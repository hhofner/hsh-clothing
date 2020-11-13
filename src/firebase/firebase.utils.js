import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkQGwnz6V0WOzdmyuaNVltXKMbHqcx_Ss",
    authDomain: "hsh-db-bda5d.firebaseapp.com",
    databaseURL: "https://hsh-db-bda5d.firebaseio.com",
    projectId: "hsh-db-bda5d",
    storageBucket: "hsh-db-bda5d.appspot.com",
    messagingSenderId: "630327257019",
    appId: "1:630327257019:web:aa903c7efe3aa379ee069e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;