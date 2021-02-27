import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDzTQBVYTDy-qU2r53zp70Hrs_Y1N4b4N8",
    authDomain: "conotify.firebaseapp.com",
    projectId: "conotify",
    storageBucket: "conotify.appspot.com",
    messagingSenderId: "495239494161",
    appId: "1:495239494161:web:8684feebb8c77cb8e0cfb0",
    measurementId: "G-PJ1M49VNM2"
}

firebase.default.initializeApp(config);

export default firebase;