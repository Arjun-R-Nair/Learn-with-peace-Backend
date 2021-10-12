import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuq_lLv12qjgbMUJsvvgsoeEigikyDWtA",
    authDomain: "learn-with-peace.firebaseapp.com",
    projectId: "learn-with-peace",
    storageBucket: "learn-with-peace.appspot.com",
    messagingSenderId: "73211903694",
    appId: "1:73211903694:web:18a17a00d37f16e52a9a9f",
    measurementId: "G-GDCF0164FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Is this working?")

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
console.log("JS file loaded")

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            conmouseleave.log("Looged in")
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:8000/homepage.html',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'google.com',
    // Privacy policy url.
    privacyPolicyUrl: 'google.com'
};


ui.start('#firebaseui-auth-container', uiConfig);

document.querySelector("method-action").addEventListener("click", function (e) {
    console.log("CLicked")
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
})