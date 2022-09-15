import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCAVgAmZfnhWYqPlCt9ty7ZcA-vbpvb7NA",
    authDomain: "pokemon-showdown-94efa.firebaseapp.com",
    databaseURL: "https://pokemon-showdown-94efa-default-rtdb.firebaseio.com/",
    projectId: "pokemon-showdown-94efa",
    storageBucket: "pokemon-showdown-94efa.appspot.com",
    messagingSenderId: "1037423050075",
    appId: "1:1037423050075:web:e5cf562c26fe41aa63ee7e",
    measurementId: "G-7PJ19QK7XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };


