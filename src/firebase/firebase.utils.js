import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAygm0mdqReOneE_3bu1-3WU81mac3t-X0",
  authDomain: "crown-db-b367a.firebaseapp.com",
  databaseURL: "https://crown-db-b367a.firebaseio.com",
  projectId: "crown-db-b367a",
  storageBucket: "",
  messagingSenderId: "374185098126",
  appId: "1:374185098126:web:db500dd1481b1e99db02df"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.singInWithPopup(provider);
export default firebase;
