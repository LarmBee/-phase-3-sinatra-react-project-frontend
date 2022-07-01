import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDzQLsw9ywkA7pNMCLJhMm6EvR9exwqobI",
    authDomain: "netflix-ruby-e8383.firebaseapp.com",
    projectId: "netflix-ruby-e8383",
    storageBucket: "netflix-ruby-e8383.appspot.com",
    messagingSenderId: "434581912901",
    appId: "1:434581912901:web:e4818ed11c6652939e522c",
    measurementId: "G-NNMD29TW5B"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)