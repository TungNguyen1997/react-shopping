

import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEsWhasNKpKsIIVPjx5X8jZCFTeNvUj6M",
    authDomain: "shopping-ba3f3.firebaseapp.com",
    databaseURL: "https://shopping-ba3f3.firebaseio.com",
    projectId: "shopping-ba3f3",
    storageBucket: "shopping-ba3f3.appspot.com",
    messagingSenderId: "10987242357",
    appId: "1:10987242357:web:597ca4a1aadfe1547d093c",
    measurementId: "G-H1QR4P8TNL"
  };
  // Initialize Firebase
  

  function firebaseInit () {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebaseInit