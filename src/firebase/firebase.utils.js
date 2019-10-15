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

export const createUserProfile = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`); // Pull the data from logged in User's Id
  const snapShot = userRef.get(); // From the user reference object call the .get method whihc will return the snapshot and let us know that the use is exists or not.

  // Check if user is not exists into the systme then create the entry of it.
  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("There is error: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
