<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import firebase from 'firebase';
  import 'firebase/firestore';
  import firebaseApp from 'firebase/app';

  const config = {
    apiKey: "AIzaSyABLqOOejoiyliTnKoWcxDkXNYr97Q2b0w",
    authDomain: "juventude-ina.firebaseapp.com",
    databaseURL: "https://juventude-ina.firebaseio.com",
    projectId: "juventude-ina",
    storageBucket: "juventude-ina.appspot.com",
    messagingSenderId: "264590070137"
  }

  export default {
    name: 'App',
    preFetch({ store }) {
      // TODO: SET PRODUCTION CONFIG WHEN CI PUSHES TO PRODUCTION
      // const config = (process.env.DEV) ? configs.dev : configs.prod;
      firebaseApp.initializeApp(config);
      const $db = firebase.firestore();
      // Put firebase functionality into
      // state for future access
      Object.assign(store.state, {
        $db: firebase.firestore(),
        $firebase: firebaseApp,
      });
    },
  }

</script>

<style>
</style>
