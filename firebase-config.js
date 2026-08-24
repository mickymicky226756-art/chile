/* ============================================================
 * FIREBASE CONFIG (load this BEFORE the main app)
 * ============================================================
 *
 * The Firebase client SDK needs these values to talk to your
 * realtime database. Because Firebase web apps talk directly to
 * the database from the browser, this file IS publicly visible
 * to anyone who opens DevTools on your site. That is by design
 * for Firebase.
 *
 * IMPORTANT: Hiding this config is NOT how you protect your data.
 * The actual security is your Firebase Database Rules, configured
 * in the Firebase Console (https://console.firebase.google.com/):
 *   - Project chilenew -> Realtime Database -> Rules tab
 *
 * See firebase-rules.json (next to this file) for a starter
 * ruleset you can paste into the Firebase Console.
 * ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyABEBJe3tXzy_unq_MJChOocfsQ1Y34sQo",
  authDomain: "chilenew.firebaseapp.com",
  databaseURL: "https://chilenew-default-rtdb.firebaseio.com",
  projectId: "chilenew",
  storageBucket: "chilenew.firebasestorage.app",
  messagingSenderId: "1065951906093",
  appId: "1:1065951906093:web:87af8309473c57ee886ba4",
  measurementId: "G-V8JE2X7V2V"
};
