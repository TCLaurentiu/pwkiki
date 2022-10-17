import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZVxLmE5nu9Q2QROr3dzkX1KrLWVLbKis",
  authDomain: "kikipw-73d17.firebaseapp.com",
  projectId: "kikipw-73d17",
  storageBucket: "kikipw-73d17.appspot.com",
  messagingSenderId: "610059359725",
  appId: "1:610059359725:web:c4fa4af8e943cba92443e4"
};



const fb_app = initializeApp(firebaseConfig);

export const auth = getAuth(fb_app);
