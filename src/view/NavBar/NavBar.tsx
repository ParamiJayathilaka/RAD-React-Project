import {Component} from "react";
import icon from '../../images/icon.png'

export class NavBar extends Component {

    render() {
        return (
            //sample 1//
            // <div className={"p-2 bg-gradient-to-r from-blue-500 to-red-400" }>
            //     <h1 className={"text-1xl text-secondary text-center"}>
            //         This is Nav Bar
            //     </h1>
            // </div>

            <div className={"p-2 bg-[#0C0C0C] flex"}>
                <h1 className={"text-1x1 text-secondary"}> Organic Shop</h1>
                <img className={"h-12 w-12 ml-1"} src={icon} alt={""}/>
                <ul className={"list-none ml-[900px]"}>
                    <li className={"inline-block mr-3 text-[#FDFF64FF] cursor-pointer hover:text-green-400"}>Home</li>
                    <li className={"inline-block mr-3 text-[#FDFF64FF] cursor-pointer hover:text-green-400"}>About</li>
                    <li className={"inline-block mr-3 text-[#FDFF64FF] cursor-pointer hover:text-green-400"}>Contact</li>
                </ul>
            </div>
        );
    }
}