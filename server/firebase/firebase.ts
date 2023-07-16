import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.DAYNOTES_APIKEY,
  authDomain: process.env.DAYNOTES_AUTHDOMAIN,
  projectId: process.env.DAYNOTES_PROJECTID,
  storageBucket: process.env.DAYNOTES_STORAGEBUCKET,
  messagingSenderId: process.env.DAYNOTES_MESSAGINGSENDERID,
  appId: process.env.DAYNOTES_APPID,
  measurementId: process.env.DAYNOTES_MEASUREMENTID,
  databaseUrl: "https://daynotes-2dda5-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
