import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC76D3gfBPeAEe401lf9_bl0MJihGs8jWA",
  authDomain: "firechat-e19b5.firebaseapp.com",
  projectId: "firechat-e19b5",
  storageBucket: "firechat-e19b5.appspot.com",
  messagingSenderId: "831681632139",
  appId: "1:831681632139:web:46d73637700144edd5018e",
  measurementId: "G-P4ZLX34X4P"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db, auth}
