import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9mSKurypriwJ5p0BRDSzBoyMg0cswjKI",
    authDomain: "joosworks-1a0e6.firebaseapp.com",
    databaseURL: "https://joosworks-1a0e6.firebaseio.com",
    projectId: "joosworks-1a0e6",
    storageBucket: "joosworks-1a0e6.appspot.com",
    messagingSenderId: "185171745461"
  };
const joosworks = firebase.initializeApp(config);

export default joosworks;