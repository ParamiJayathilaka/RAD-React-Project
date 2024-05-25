import {Component} from "react";

export class MainContent extends Component{
    render() {
        return (
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

        <div className={"md:px-12 max-2xl mx-auto bg-[#0C3610FF] pt-28 pb-28"}>
            <h1 className={"text-tertiary text-center"}> This Is Main Content</h1>
        </div>

        )
    }
}