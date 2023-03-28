import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseKeys } from "./firebase-keys";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseKeys);
// const analytics = getAnalytics(app);
export const auth = getAuth()

