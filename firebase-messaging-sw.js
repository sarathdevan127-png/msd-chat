
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBojogl1g0i2_zXK-B8A29cnIRM5pn3DjY",
  authDomain: "msd-chat-18e3a.firebaseapp.com",
  projectId: "msd-chat-18e3a",
  storageBucket: "msd-chat-18e3a.firebasestorage.app",
  messagingSenderId: "159171434081",
  appId: "1:159171434081:web:9997129ce58a5af47abc20"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "MSD Chat";
  const options = {
    body: payload.notification?.body || "You have a new message!",
    icon: "/favicon.ico",
    data: payload.data || {}
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then((windowClients) => {
      for (const client of windowClients) {
        if ("focus" in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});

