import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkwH2VFp6CQsMQz07WoCNVbpbYNNw4kVo",
  authDomain: "portfolio-87d6c.firebaseapp.com",
  projectId: "portfolio-87d6c",
  storageBucket: "portfolio-87d6c.appspot.com",
  messagingSenderId: "669207125397",
  appId: "1:669207125397:web:dad43539ceaeae26c36a9c",
  measurementId: "G-61QQ32Z4EX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
