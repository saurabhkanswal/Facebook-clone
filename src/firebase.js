import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAiAq7UX5nIrYhOTG_jQ3FE5yy6aZsUHFY",
    authDomain: "fb-clone-c71be.firebaseapp.com",
    projectId: "fb-clone-c71be",
    storageBucket: "fb-clone-c71be.appspot.com",
    messagingSenderId: "410523334001",
    appId: "1:410523334001:web:00e2ba3102c2e67bfdf2d0",
    measurementId: "G-4VX72EFPRL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db; 