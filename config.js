 import firebase from "firebase";

//initialize your database
  const firebaseConfig = {
  apiKey: "AIzaSyBJtaTJp66qMbt3niB-XvVEVhDZ8_Hcvf8",
  authDomain: "project-37-d256b.firebaseapp.com",
  databaseURL: "https://project-37-d256b-default-rtdb.firebaseio.com",
  projectId: "project-37-d256b",
  storageBucket: "project-37-d256b.appspot.com",
  messagingSenderId: "908740606429",
  appId: "1:908740606429:web:2cdbb585f9221609279e34"
};
  let app = firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  