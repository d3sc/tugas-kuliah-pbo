import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import BMI from "../page/BMI";
import Suhu from "../page/Suhu";
import Diskon from "../page/Diskon";
import Jkw from "../page/Jkw";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/suhu" element={<Suhu />} />
          <Route path="/diskon" element={<Diskon />} />
          <Route path="/jkw" element={<Jkw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
