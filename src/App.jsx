import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import BMI from "./page/BMI";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
