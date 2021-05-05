import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCk5a_oThKZj2UcbZmPLQ2ySNUCHMxmECM",
    authDomain: "news-letter-406b6.firebaseapp.com",
    databaseURL: "https://news-letter-406b6-default-rtdb.firebaseio.com",
    projectId: "news-letter-406b6",
    storageBucket: "news-letter-406b6.appspot.com",
    messagingSenderId: "805661575754",
    appId: "1:805661575754:web:3941163ca98009d396b4b3",
    measurementId: "G-VSG9QBVCRV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default firebase.database();