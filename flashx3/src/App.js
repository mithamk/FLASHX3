/*
    Project Name: FLASHX3
    Contributors:
        - Meghana Saisri Bisa
        - Mitha M K
        - Mrunal Manjunath Kudtarkar
*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trivia from './components/trivia';
import MakeYourOwnDP from './components/MakeYourOwnDP';
import MakeYourOwn1 from './components/MakeYourOwn1';
import MakeYourOwn2 from './components/MakeYourOwn2';
import MakeYourOwn3 from "./components/MakeYourOwn3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {
          <div style = {{width: "100%", height: "100vh"}}>
            <iframe
              src = {`${process.env.PUBLIC_URL}/login.html`}
              title = "Signup-Login"
              style = {{width: "100%", height: "100%", border: "none"}}
            />
          </div>
        }/>
        <Route path = '/MakeYourOwnDP' element = {<MakeYourOwnDP/>}/>
        <Route path = '/MakeYourOwn1' element = {<MakeYourOwn1/>}/>
        <Route path = '/MakeYourOwn2' element = {<MakeYourOwn2/>}/>
        <Route path="/MakeYourOwn3" element = {<MakeYourOwn3/>}/>
        <Route path = "/trivia" element = {<Trivia/>}/>
      </Routes>
    </Router>
  );
}

export default App;
