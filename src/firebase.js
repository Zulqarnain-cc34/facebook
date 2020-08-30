import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBIcwLwNIjGVrm4Crtk261WCv7oGwJqFCE",
  authDomain: "facebook-app-2b2f1.firebaseapp.com",
  databaseURL: "https://facebook-app-2b2f1.firebaseio.com",
  projectId: "facebook-app-2b2f1",
  storageBucket: "facebook-app-2b2f1.appspot.com",
  messagingSenderId: "887321191789",
  appId: "1:887321191789:web:4824bc0143ed083503a664",
  measurementId: "G-MEZX8JHQ63",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
