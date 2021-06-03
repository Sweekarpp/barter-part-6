import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCtrlJr3TqlclP27TPtYfp273j8TKkOzAw",
    authDomain: "barter-app-47d7a.firebaseapp.com",
    databaseURL: "https://barter-app-47d7a.firebaseio.com",
    projectId: "barter-app-47d7a",
    storageBucket: "barter-app-47d7a.appspot.com",
    messagingSenderId: "634460011283",
    appId: "1:634460011283:web:bb42ebfde1687f4cdeb8e6"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();