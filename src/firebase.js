import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUOB6kCcouDgKgHexKqPPbBXas4BFSo64",
  authDomain: "chat-ba772.firebaseapp.com",
  projectId: "chat-ba772",
  storageBucket: "chat-ba772.appspot.com",
  messagingSenderId: "870166554617",
  appId: "1:870166554617:web:f83fc43d6d6cd254183f28",
  measurementId: "G-W0B60GX1B3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
