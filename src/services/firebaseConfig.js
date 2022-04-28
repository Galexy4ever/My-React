
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMRju4dlCvnF6KRL4hV5ggDhx13I4O_0A",
  authDomain: "myfirebase-a9729.firebaseapp.com",
  databaseURL: "https://myfirebase-a9729-default-rtdb.firebaseio.com",
  projectId: "myfirebase-a9729",
  storageBucket: "myfirebase-a9729.appspot.com",
  messagingSenderId: "802387048058",
  appId: "1:802387048058:web:aa69ba85e327392ae22dc3"
};


const firebase = initializeApp(firebaseConfig);

export default firebase