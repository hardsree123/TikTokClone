import firebase from 'firebase';
const firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// database 
const db = firebase.firestore();

export default db;
