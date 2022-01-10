import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyCjJbUd4PcUoD0hjUn7qkLeeJtKGZz7Ru4",
	authDomain: "crwn-db-2b637.firebaseapp.com",
	projectId: "crwn-db-2b637",
	storageBucket: "crwn-db-2b637.appspot.com",
	messagingSenderId: "1007521046690",
	appId: "1:1007521046690:web:de5eee0861485cb7dd77fb",
	measurementId: "G-KM0LCFD2B5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;