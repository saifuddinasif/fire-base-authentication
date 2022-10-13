
import './App.css';


import { getAuth, GoogleAuthProvider} from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {


  const handleGoogleSignIn = () => {

    console.log("object");
  }

  const provider = new GoogleAuthProvider()



  return (
    <div className="App">
       <button onClick={handleGoogleSignIn}>GOOGLE SIGN IN </button>

    </div>
  );
}

export default App;
