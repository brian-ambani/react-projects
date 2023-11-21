import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBVj8kY5XTKWVzkLvjsIXKzo2aIf_tTmjk",
    authDomain: "wechat-cb78a.firebaseapp.com",
    projectId: "wechat-cb78a",
    storageBucket: "wechat-cb78a.appspot.com",
    messagingSenderId: "666151316117",
    appId: "1:666151316117:web:95f43018dbeaa5a573c99c",
  })
  .auth();
