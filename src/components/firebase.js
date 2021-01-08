import firebase from 'firebase';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD89659O-6c7VpDbXC1YIbInp2XyDiqndQ",
    authDomain: "job-tracker-9e6cd.firebaseapp.com",
    projectId: "job-tracker-9e6cd",
    storageBucket: "job-tracker-9e6cd.appspot.com",
    messagingSenderId: "328489088859",
    appId: "1:328489088859:web:404d2a3fad4532fbca0c7e",
    measurementId: "G-ZSMM19G4VD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;