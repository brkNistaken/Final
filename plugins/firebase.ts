// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { defineNuxtPlugin } from '#app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBPCdcef4H2mYuzP-3Pbh6t8WAr65Uq_rU",
    authDomain: "webproject-f93aa.firebaseapp.com",
    projectId: "webproject-f93aa",
    storageBucket: "webproject-f93aa.firebasestorage.app",
    messagingSenderId: "563943750992",
    appId: "1:563943750992:web:e49492f70b632d0c648055",
    measurementId: "G-8CNR1YZNJR"
  };
  
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(app);
  const projectAuth = getAuth(app);

  console.log('Firebase initialized:', app);
  console.log('Firestore:', projectFirestore);
  console.log('Auth:', projectAuth);

  nuxtApp.provide('firebase', {
    app,
    projectFirestore,
    projectAuth,
    serverTimestamp,
  });
});
