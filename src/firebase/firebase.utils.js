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

// if you're experiencng issues after Feb. 8, 2022, go to
// https://console.firebase.google.com/u/0/project/crwn-db-2b637/firestore/rules and or update the
// request.time rule.
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		}
		catch(error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;