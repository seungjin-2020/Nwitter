import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHZBRzCi5puLObbQx1cdY7bvQ8qFbEaMw",
    authDomain: "nwitter-47d0b.firebaseapp.com",
    databaseURL: "https://nwitter-47d0b.firebaseio.com",
    projectId: "nwitter-47d0b",
    storageBucket: "nwitter-47d0b.appspot.com",
    messagingSenderId: "152723115703",
    appId: "1:152723115703:web:4c48253f0db2ff45718732"
};

export default firebase.initializeApp(firebaseConfig);