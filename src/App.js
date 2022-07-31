import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Tdos from './components/Tdos';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './components/firekey/Fire';


function App() {

  const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

  if(googleuser){
    alert("okay successfully")
  }

  return (
    <div className="App mt-5 mb-5">
      <button onClick={() => signInWithGoogle() } className='className="mx-5 bg-cyan-300 hover:bg-cyan-500 text-black font-bold py-2 px-4
       border  rounded"'>google</button>
       {/* home part  */}
     <Home></Home>
    </div>
  );
}

export default App;
