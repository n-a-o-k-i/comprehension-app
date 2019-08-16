import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAYJnFSPHFeOU41utWbRZeHzHoKIVCWT9A",
    authDomain: "comprehension-app-d307d.firebaseapp.com",
    databaseURL: "https://comprehension-app-d307d.firebaseio.com",
    projectId: "comprehension-app-d307d",
    storageBucket: "",
    messagingSenderId: "60775228723",
    appId: "1:60775228723:web:013191dce4caf1e4"
  })
}

export default firebase