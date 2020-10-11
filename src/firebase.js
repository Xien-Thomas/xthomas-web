import firebase from "firebase";

import database from "firebase/database";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDS8IkSc8yD2eAjmmuwMZZphtJSF5EL7Zo",
  authDomain: "personal-newsletter-3fd7e.firebaseapp.com",
  databaseURL: "https://personal-newsletter-3fd7e.firebaseio.com",
  projectId: "personal-newsletter-3fd7e",
  storageBucket: "personal-newsletter-3fd7e.appspot.com",
  messagingSenderId: "717178030307",
  appId: "1:717178030307:web:ffd2bc464b8c6f9d971dd6",
});

var db = firebaseApp.firestore();

export { db };

// let firebaseCache;

// export const getFirebase = () => {
//   if (firebaseCache) {
//     return firebaseCache;
//   }

//   firebaseCache = firebase;
//   return firebase;
// };
