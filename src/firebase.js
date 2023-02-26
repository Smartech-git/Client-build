
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDS3CHBV0Dd5ZB7LGRpiJrdzitalWCgjPY",
  authDomain: "garmafoundry.firebaseapp.com",
  projectId: "garmafoundry",
  storageBucket: "garmafoundry.appspot.com",
  messagingSenderId: "298355693289",
  appId: "1:298355693289:web:c42589a6f595120d374278",
  measurementId: "G-4MCDGJYJ0L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);