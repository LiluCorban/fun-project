

import "./main.css";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import {Route, Routes} from "react-router-dom";



const Main = (props) => {
    return(
        <main>
            <div className="centre">
                <h1>WANNA GREAT PARTY?</h1>
            </div>
            <Routes>
                <Route pass="/main" element={<Section1/>}/>
                <Route pass="/how-it-works" element={<Section2/>}/>
                <Route pass="/pricing" element={ <Section3 products={props.products}/>}/>

            </Routes>

            
        </main>
    )
}

export default Main;