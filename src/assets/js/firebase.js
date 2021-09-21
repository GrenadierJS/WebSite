// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA2-PGZUDCvuMP-et1ajAWb2r6QXY4WGl4",
	appId: "1:16903102826:web:f85c7fd237548c3edf4513",
	authDomain: "grenadierjs.firebaseapp.com",
	databaseURL: "https://grenadierjs.firebaseio.com",
	measurementId: "G-DPX1SEK8T2",
	messagingSenderId: "16903102826",
	projectId: "grenadierjs",
	storageBucket: "grenadierjs.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);
