import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import React from "react";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}
export default App;