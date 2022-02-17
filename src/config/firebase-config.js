import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyAvs1A5QQIc_pLKR-WeJ4JunHukeE9BXTU',
    authDomain: 'shoe-store-app-492df.firebaseapp.com',
    // ...
};
firebase.initializeApp(firebaseConfig);

export default firebase;