// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBGxl5Z_lGJewvjMa8A4R6asc6HHzFL0ew",
//     authDomain: "zazion.firebaseapp.com",
//     projectId: "zazion",
//     storageBucket: "zazion.appspot.com",
//     messagingSenderId: "787705287919",
//     appId: "1:787705287919:web:e0fac1a45ebc4a2111b71a",
//     measurementId: "G-242WKGS3FL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyApY7B9VP86YlmqQ5L0GAnSXc48CvtY-UY",
//     authDomain: "zaizon-test.firebaseapp.com",
//     projectId: "zaizon-test",
//     storageBucket: "zaizon-test.appspot.com",
//     messagingSenderId: "568886416397",
//     appId: "1:568886416397:web:e9ce6c304ab55c1d013144",
//     measurementId: "G-40YG659FBF"
// };
var firebaseConfig = {
    apiKey: "AIzaSyApY7B9VP86YlmqQ5L0GAnSXc48CvtY-UY",
    authDomain: "zaizon-test.firebaseapp.com",
    projectId: "zaizon-test",
    storageBucket: "zaizon-test.appspot.com",
    messagingSenderId: "568886416397",
    appId: "1:568886416397:web:e9ce6c304ab55c1d013144",
    measurementId: "G-40YG659FBF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();


