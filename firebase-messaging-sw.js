importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
  apiKey: "AIzaSyBTqe0vEheYxJBazWhgvPlj1eMCP4r-Rao",
  authDomain: "patur-e1662.firebaseapp.com",
  projectId: "patur-e1662",
  storageBucket: "patur-e1662.appspot.com",
  messagingSenderId: "600530513300",
  appId: "1:600530513300:web:8c82284f455ff58a527381",
  measurementId: "G-X8PTBT2NQS",
};

firebase.initializeApp({
  messagingSenderId: "600530513300",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
