
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "msd-chat-18e3a.firebaseapp.com",
  projectId: "msd-chat-18e3a",
  storageBucket: "msd-chat-18e3a.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "MSD Chat";
  const options = {
    body: payload.notification?.body || "You have a new message!",
    icon: "/favicon.ico"
  };

  self.registration.showNotification(title, options);
});

