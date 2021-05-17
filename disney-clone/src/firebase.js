import firebase from "firebase";

// get your own config by creating an app on firebase
import { firebaseConfig } from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
