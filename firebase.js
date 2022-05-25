import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getFirestore, collection, getDocs, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUzk0oAEHU-WAcTCu44l0KMz0voKHVcBU",
    authDomain: "anki-clon.firebaseapp.com",
    projectId: "anki-clon",
    storageBucket: "anki-clon.appspot.com",
    messagingSenderId: "409564404650",
    appId: "1:409564404650:web:e30ed806782b408eee69d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.app=app;
window.db=db;
window.doc=doc;
window.setDoc=setDoc;

console.log('Created db', db);