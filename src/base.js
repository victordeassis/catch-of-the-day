import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkQuM9Fe30HdRaADQ_PNMJjwOrJpEC3b0",
  authDomain: "catch-of-the-day-victor-alves.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-victor-alves.firebaseio.com",
  appId: "1:174968784393:web:eed9993beb7c78c4451ad8"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
