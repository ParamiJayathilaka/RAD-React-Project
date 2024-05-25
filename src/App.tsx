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
import {NavBar} from "./view/NavBar/NavBar"
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    return (
        <div>
            <NavBar></NavBar>

        </div>



    );
}

export default App;
