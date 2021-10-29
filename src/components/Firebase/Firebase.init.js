import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebaseAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebaseAuthentication;