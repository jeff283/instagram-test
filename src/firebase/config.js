  import  firebase from "firebase/app";
  import "firebase/storage";
  import "firebase/firestore";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVpawoJ5oR0geGfRLoD23cLNzOSlwQHJc",
    authDomain: "linver-firegram.firebaseapp.com",
    projectId: "linver-firegram",
    storageBucket: "linver-firegram.appspot.com",
    messagingSenderId: "94964639513",
    appId: "1:94964639513:web:4d80e1879940c7aae28788"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};