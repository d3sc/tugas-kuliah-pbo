import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import BMI from "../page/BMI";

const Router=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bmi" element={<BMI />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;