import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName, email, photoURL} = res.user;
        return {
          name: displayName,
          email,
          photo: photoURL
        };
      }).catch(function(error) {
        return {
          name: '',
          email: '',
          photo: ''
        };
      });
}