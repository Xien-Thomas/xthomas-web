import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDS8IkSc8yD2eAjmmuwMZZphtJSF5EL7Zo",
  authDomain: "personal-newsletter-3fd7e.firebaseapp.com",
  databaseURL: "<YOUR-DATABASE-URL>",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>",
  messagingSenderId: "<YOUR-MESSAGE-SENDER-ID>",
  appId: "<YOUR-APP-ID>",
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
