import * as firebase from 'firebase'

// import CONFIG from 'react-native-config'

// const firebaseConfig = firebase.initializeApp({
//     apiKey: CONFIG.API_KEY || '',
//     authDomain: CONFIG.AUTH_DOMAIN || '',
//     databaseURL: CONFIG.DATABASE_URL || '',
//     projectId: CONFIG.PROJECT_ID || '',
//     storageBucket: CONFIG.STORAGE_BUCKET || '',
//     messagingSenderId: CONFIG.SENDER_ID || '',
//     appId: CONFIG.APP_ID || ''
//   })

  const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBcI2IuKeLo1euEcBVg45cZBfvpOHG1r_Q",
    authDomain: "mapsenger-app.firebaseapp.com",
    databaseURL: "https://mapsenger-app.firebaseio.com",
    projectId: "mapsenger-app",
    storageBucket: "mapsenger-app.appspot.com",
    messagingSenderId: "740367016100",
    appId: "1:740367016100:web:109576db0400fa7151c631"
  })

export default firebaseConfig
