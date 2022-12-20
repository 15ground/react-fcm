import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyClOijiaOqL_DCH2Dnde2NDQWa4u1G9QOw",
  authDomain: "wardenops.firebaseapp.com",
  projectId: "wardenops",
  storageBucket: "wardenops.appspot.com",
  messagingSenderId: "91224184247",
  appId: "1:91224184247:web:0ead89846a08628b778432",
  measurementId: "G-F36W6VK48G",
};


function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BO9jwpImWoSAqDih9aU4xT70tibo33wgNVaAbYw8GiWkpzBQEa0hsV2IRZ3LwGhN1FiOWXBP_XVC9rVP7066Ez0",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
