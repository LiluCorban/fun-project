
import './App.css';
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Parties from "./Components/Parties/parties";
import {Route, Routes} from "react-router-dom";
import How from "./Components/How/How";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/footer";


function App(props) {
  return (
      <div className="wrapper">
        <Header links={props.state.header}/>
          <Main />
      <Routes>
      <Route path="/main" element={<Parties/>}/>
          <Route path="/how-it-works" element={<How/>}/>
         <Route path="/pricing" element={<Pricing products={props.state.main.section3}/>}/>


      </Routes>
          <Footer links={props.state.header}/>



</div>

  )
}

export default App;
