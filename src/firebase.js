import firebase from "firebase/app" /* imports firebase */
import "firebase/firestore"
/* */
/*object which contains firebase values */
const firebaseConfiguration = {
    apiKey: "AIzaSyBSxyaPvgwTljEGYB0I1ft2Bxo1w6OsM34",
    authDomain: "learnerapplication-442cf.firebaseapp.com",
    databaseURL:"https://learnerapplication-442cf-default-rtdb.firebaseio.com/",
    projectId: "learnerapplication-442cf",
    storageBucket: "learnerapplication-442cf.appspot.com",
    messagingSenderId: "727187689068",
    appId: "1:727187689068:web:388b2a9c25f682e17bd249"
  };


firebase.initializeApp(firebaseConfiguration);
/* allows use of firebase within app*/
export default firebase;