// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOyCruHiJ8bhVjbzBzi5ZoTiGpiEXNsA",
  authDomain: "tasklist-firebase-7bf5d.firebaseapp.com",
  projectId: "tasklist-firebase-7bf5d",
  storageBucket: "tasklist-firebase-7bf5d.appspot.com",
  messagingSenderId: "628382860241",
  appId: "1:628382860241:web:11b54d57c7aa4a35bd96f0"
};

const developmenFirebaseConfig = {
  apiKey: "AIzaSyDFe-vqJmdwzce4TCax5ick-CGNzKAOWyU",
  authDomain: "tasklist-firebase-test.firebaseapp.com",
  projectId: "tasklist-firebase-test",
  storageBucket: "tasklist-firebase-test.appspot.com",
  messagingSenderId: "101763822494",
  appId: "1:101763822494:web:544bc6dab28af1fd325c8f"
};

let app;
if(process.env.NODE_ENV === 'production'){
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(developmenFirebaseConfig);
}

const db = getFirestore(app);

export {
  app,
  db
}