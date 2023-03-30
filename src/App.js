
import './App.css';
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Parties from "./Components/Parties/parties";
import {Route, Routes} from "react-router-dom";


function App(props) {
  return (
      <div className="wrapper">
        <Header links={props.state.header}/>
          <Main products={props.state.main.section3}/>
      <Routes>
      <Route path="/main" element={<Parties/>}/>

      </Routes>

</div>

  )
}

export default App;
