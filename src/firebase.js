import firebase from "firebase";
import { firebaseConfig } from "./APIFirebase";

// for firebaseConfig paste your own credentials by going to firebase and signing up

// export const firebaseConfig = {
//   apiKey: ,
//   authDomain: ,
//   projectId: ,
//   storageBucket: ,
//   messagingSenderId:,
//   appId: ,
//   measurementId: ,
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
