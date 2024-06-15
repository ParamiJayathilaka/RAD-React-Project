import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";
import ModifyCart from "../ModifyCart/ModifyCart";

export class MainContent extends Component{
    render() {
        return (

            <div className={"pt-28 pb-28 "}>
                <Routes>
                    <Route path={"/"} Component={Home}></Route>
                    <Route path={"/about"} Component={About}></Route>
                    <Route path={"/contact"} Component={Contact}></Route>
                    <Route path={"/shopping-cart"} element={<ShoppingCart itemsList={ModifyCart.itemsList}/>}></Route>
                </Routes>
            </div>

        )
    }
}



//eg 1//
            // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
            //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
            //     <div className={"h-20 w-20 bg-yellow-300 text-center p-1"}>Height<br/>&<br/>Width</div>
            // </div>

//eg 2//
            // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
            //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
            //     <div className={"h-screen-20 w-1/3 bg-yellow-300 text-center p-1"}>Height<br/>&<br/>Width</div>
            // </div>

//eg 3//
//         <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
//             <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
//             <div className={"h-screen w-1/3 bg-yellow-300 text-center p-1"}>Height<br/>&<br/>Width</div>
//         </div>

         //eg 4 rotate//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-10 w-10 bg-yellow-300 text-center p-1 rotate-12 shadow-lg shadow-black-500"}>Height<br/>&<br/>Width</div>
        // </div>

        //eg 4 shadow//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-20 w-20 bg-yellow-300 text-center p-1 rotate-12 shadow-lg shadow-black-500"}>Height<br/>&<br/>Width</div>
        // </div>

        //eg 4 hover shadow//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-20 w-20 bg-yellow-300 text-center p-1 rotate-12 shadow-lg hover:shadow-red-500"}>Height<br/>&<br/>Width</div>
        // </div>

        //eg 4 curser point//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-20 w-20 bg-yellow-300 text-center p-1 rotate-12 shadow-lg hover:shadow-red-500 cursor-pointer"}>Height<br/>&<br/>Width</div>
        // </div>

        //eg 4 Screen Size//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-20 max-w-screen-sm bg-yellow-300 text-center p-1 rotate-12 shadow-lg hover:shadow-red-500 cursor-pointer"}>Height<br/>&<br/>Width</div>
        // </div>

        //eg 4 Screen Size//
        // <div className={"md:px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br  from-green-300 via-blue-100 to-yellow-400"}>
        //     <h1 className={"text-1xl text-secondary text-center"}>This is Main Content</h1>
        //     <div className={"h-20 max-w-screen-xl bg-yellow-300 text-center p-1 rotate-12 shadow-lg hover:shadow-red-500 cursor-pointer mx-auto"}>Height<br/>&<br/>Width</div>
        // </div>

        // <div className={"md:px-12 max-2xl mx-auto bg-[#0C3610FF] pt-28 pb-28"}>
        //     <h1 className={"text-tertiary text-center"}> This Is Main Content</h1>
        // </div>


