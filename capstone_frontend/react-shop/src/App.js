import "bootstrap/dist/css/bootstrap.min.css";
//import reactRouterDom from "react-router-dom";
//import {Button} from 'react-bootstrap'
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./views/Home";
import Tool from "./components/Tool";
import Room from "./components/Room";
import Remodel from "./components/Remodel";


function App() {
  return (
    <div >
      
      <BrowserRouter>
      <NavBar />
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Tool">
        <Tool />
      </Route>
      <Route path="/Room">
        <Room />
      </Route>
      <Route path="/Remodel">
        <Remodel />
      </Route>
      
      
      </BrowserRouter>
      
    </div>

  );
}



export default App;
