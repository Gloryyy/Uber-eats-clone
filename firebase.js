import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJJ3_GR4NUF-nG_JpoOxTHjlmbZhMeoPk',
  authDomain: 'rn-uber-eats-clone-e7f3f.firebaseapp.com',
  projectId: 'rn-uber-eats-clone-e7f3f',
  storageBucket: 'rn-uber-eats-clone-e7f3f.appspot.com',
  messagingSenderId: '221504523897',
  appId: '1:221504523897:web:f1b79175a197b7752c0ea8',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
