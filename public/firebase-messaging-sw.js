/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyClOijiaOqL_DCH2Dnde2NDQWa4u1G9QOw",
  authDomain: "wardenops.firebaseapp.com",
  projectId: "wardenops",
  storageBucket: "wardenops.appspot.com",
  messagingSenderId: "91224184247",
  appId: "1:91224184247:web:0ead89846a08628b778432",
  measurementId: "G-F36W6VK48G",
}; 

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});
