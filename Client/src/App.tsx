// import React from 'react';
// import './App.css';

// function App() {
//   return (
//       <div>
//         <h1 className={"text-4xl text-red-500"}>This is App.js</h1><br/>
//         <div style={{backgroundColor:"red" , padding:10, textAlign:"center"}}>Inline CSS Box</div><br/>
//           <div className={"box"}> External CSS Box</div><br/>
//           <div className="bg-red-500 p-3 text-center">Utility CSS Box</div><br/>
//       </div>
//
//   );
// }
//
// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar"
import {findAllByDisplayValue} from "@testing-library/react";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import {Login} from "./view/pages/Login/Login";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";



function App() {
    return (
        <div>
            <BrowserRouter>
               <Routes>
                    <Route path="/*"
                           Component={DefaultLayout}>
                    </Route>
                    <Route path="/login"
                           Component={Login}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
