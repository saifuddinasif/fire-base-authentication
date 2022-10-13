
import './App.css';


import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

const [user , setUser] = useState({});

  const handleGoogleSignIn = () => {

 signInWithPopup(auth, provider)

 .then(result => {

  const user = result.user;
 setUser(user)

 })
 .catch(error => {
  console.log("object");
 })
  }

  const handleGoogleSignOut = ( )  => {

     signOut(auth)

     .then( ( ) => {
          
      setUser({});

     })
     .catch(() => {

      setUser({});
      
     })

  }

  const provider = new GoogleAuthProvider()



  return (
    <div className="App">
       <button onClick={handleGoogleSignIn}>GOOGLE SIGN IN </button>
       <button onClick={handleGoogleSignOut}>GOOGLE SIGN out </button>

        <h4>user name : {user.displayName}</h4>
        <p>email : {user.email}</p>

    </div>
  );
}

export default App;
