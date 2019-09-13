import * as firebase from 'firebase'
import CONFIG from 'react-native-config'

const firebaseConfig = firebase.initializeApp({
    apiKey: CONFIG.API_KEY,
    authDomain: CONFIG.AUTH_DOMAIN,
    databaseURL: CONFIG.DATABASE_URL,
    projectId: CONFIG.PROJECT_ID,
    storageBucket: CONFIG.STORAGE_BUCKET,
    messagingSenderId: CONFIG.SENDER_ID,
    appId: CONFIG.APP_ID
  })

export default firebaseConfig
