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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // when we "sign out" we receive a null, so handling that

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // Returns a reference

    const snapShot = await userRef.get();
    // And we get the actual data

    // If it doesn't exist, create a new user
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // This method was to be called once when transferring all the data to
    // firebase
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach( obj => {
        const newDocRef = collectionRef.doc(); // Firestore automatically makes the key id
        batch.set(newDocRef, obj);
    })

    return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;