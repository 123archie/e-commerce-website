import{
    initializeApp
}from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import{
    getDatabase, ref, set, get, child
}from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js"
const firebaseConfig={
    apiKey: "AIzaSyATtRhy7Qn9FGKXTuGmTpzvRXLdPDkGMOo",
    authDomain: "firebaseio.com",
    databaseURL: "https://e-commerce-5e2a4-default-rtdb.firebaseio.com",
    projectId: "e-commerce-5e2a4",
    // messagingSenderId: "989109823031",
    appId: "1:989109823031:web:b2abb2294b0250016741b2"
}

const app=initializeApp(firebaseConfig);
const db=getDatabase(app);

document.getElementById('submit').addEventListener(onsubmit, function(e){
e.preventDefault();
set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7))
),{
    user: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    phone: document.getElementById("phone").value
}
});
alert("Form submitted successfully");
