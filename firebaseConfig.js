import AsyncStorage from "@react-native-async-storage/async-storage"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native"
const firebaseConfig = {
  apiKey: "AIzaSyChHyqjvOHH7bPdXuKPESnuAZsMzK4pmf0",
  authDomain: "thannambikkai-3599f.firebaseapp.com",
  projectId: "thannambikkai-3599f",
  storageBucket: "thannambikkai-3599f.appspot.com",
  messagingSenderId: "292991825756",
  appId: "1:292991825756:web:8fe9b8bf0d867fd540f399",
  measurementId: "G-WRHPRTHPVQ",
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app)
export const storage = getStorage(app)
