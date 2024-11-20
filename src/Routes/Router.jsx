import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import BMI from "../page/BMI";
import Suhu from "../page/Suhu";
import Diskon from "../page/Diskon";
import Kecepatan from "../page/Kecepatan";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/suhu" element={<Suhu />} />
          <Route path="/diskon" element={<Diskon />} />
          <Route path="/kecepatan" element={<Kecepatan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
