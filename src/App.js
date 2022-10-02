import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import New from "./components/Test/New";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Old from "./components/Test/Old";
import Extra from "./components/Test/Extra";

function App() {
  const location = useLocation();

  return (
    <div className="App mt-5 mb-5">
      {/* home part  */}

      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/new" element={<New></New>}></Route>
          <Route  path="/old" element={<Old></Old>} ></Route>
          <Route  path="/extra" element={<Extra></Extra>} ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
