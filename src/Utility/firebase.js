import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "e-clone-a249d.firebaseapp.com",
	projectId: "e-clone-a249d",
	storageBucket: "e-clone-a249d.firebasestorage.app",
	messagingSenderId: "403149805287",
	appId: "1:403149805287:web:7fe982448bba817f91b442",
};
// console.log("API Key:", firebaseConfig.apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
