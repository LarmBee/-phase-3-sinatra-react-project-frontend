import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSGREYPvo_CokstFGTvyOcJbIm5ZDpqJc",
    authDomain: "netflix-ruby.firebaseapp.com",
    projectId: "netflix-ruby",
    storageBucket: "netflix-ruby.appspot.com",
    messagingSenderId: "395099619603",
    appId: "1:395099619603:web:719d0dc974b39b11c61ae6",
    measurementId: "G-D1LX9WEHBY"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)