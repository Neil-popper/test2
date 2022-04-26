import * as firebase from 'firebase'


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQmwIWen4pLym2OaTtT6GmylsSZJ_GgGE",
  authDomain: "beeswarmsimulator-fa20a.firebaseapp.com",
  projectId: "beeswarmsimulator-fa20a",
  storageBucket: "beeswarmsimulator-fa20a.appspot.com",
  messagingSenderId: "214339497907",
  appId: "1:214339497907:web:a300bd2290376d7b9525c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()