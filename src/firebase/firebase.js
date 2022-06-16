import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

export const provider =  new GoogleAuthProvider()
export const providerFacebook =  new FacebookAuthProvider()

const app = initializeApp({
  apiKey: "AIzaSyDcNQUQFpR4m46pC9sbxibgUsa16H4JZ74",
  authDomain: "as-development-930bf.firebaseapp.com",
  projectId: "as-development-930bf",
  storageBucket: "as-development-930bf.appspot.com",
  messagingSenderId: "609495062746",
  appId: "1:609495062746:web:a4968294ee9a8f5815ade3"
})

export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore(app)
export default app