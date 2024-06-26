// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdMacVY0bUh_sBdWXTj8WxKS9oVc2Oh5s",
  authDomain: "fir-shopping-69bd2.firebaseapp.com",
  projectId: "fir-shopping-69bd2",
  storageBucket: "fir-shopping-69bd2.appspot.com",
  messagingSenderId: "740508353124",
  appId: "1:740508353124:web:fab6d57c3fa9f4bbcb1571"
};
const devFirebaseConfig = {
  apiKey: "AIzaSyBsNSA-71Sz_AmZLvefGJmZTO186Q59ORc",
  authDomain: "dev-firebase-shopping-36675.firebaseapp.com",
  projectId: "dev-firebase-shopping-36675",
  storageBucket: "dev-firebase-shopping-36675.appspot.com",
  messagingSenderId: "629548094481",
  appId: "1:629548094481:web:3ab11fde9a246a52950db0"
}

// Initialize Firebase
let app;
if (process.env.NODE_ENV === "production"){
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig);
}

export {app}

export const messaging = getMessaging();

const vapidKeyProd = "BIWrIdGxrfimfaZi0T5w3vSbBiQHItL893SVhNQp_aAXO3kRaHeIvYy-sQffM332JEzlXPIHa5hns50bl3ZxngI";
const vapidKeyDev = "BFXYCp1qiVhdcKMz6--_mVU-jbejSi-pMnJs2v_bcChD8qbo3VjqwOFkmH_73rgCd_pW6sg5kzl0mwh5lS2hY4I";

getToken(messaging, { vapidKey: process.env.NODE_ENV === 'production' ? vapidKeyProd : vapidKeyDev })
  .then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    //console.log('currentToken', currentToken);
    sendTokenToServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendTokenToServer = token => {
  if (localStorage.getItem('tokenSentToServer')) return;

  localStorage.setItem('tokenSentToServer', token);
}

export const db = getFirestore(app);