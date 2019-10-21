import firebase from 'firebase';


// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDIp9yE8unD9Jpg-UBE6cvX1spfLclPdiw",
    authDomain: "portfolio-josiel-react.firebaseapp.com",
    databaseURL: "https://portfolio-josiel-react.firebaseio.com",
    projectId: "portfolio-josiel-react",
    storageBucket: "portfolio-josiel-react.appspot.com",
    messagingSenderId: "857124033666",
    appId: "1:857124033666:web:078f94d32a62c5e3f8909b",
    measurementId: "G-PQQ45YCW9M"
  };

  // Initialize Firebase
  export const firebaseImpl = firebase.initializeApp(config);
  var firebaseDatabase = firebase.database();
  export default firebaseDatabase;