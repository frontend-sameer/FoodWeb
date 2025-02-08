import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);
  const handelcartCount = () => {
    let countcopy = count;
    setcount(countcopy + 1);
  };

  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Home handelcartCount={handelcartCount} />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/OurFood"
          element={<OurFood handelcartCount={handelcartCount} />}
        />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
