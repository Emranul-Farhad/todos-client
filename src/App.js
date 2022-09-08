
import './App.css';
import Home from './components/Home/Home';



import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

 

  return (
    <div className="App mt-5 mb-5">
      

      {/* home part  */}
    <Routes>
      
      <Route path='/' element={<Home></Home> } ></Route>
    </Routes>



    </div>
  );
}

export default App;
