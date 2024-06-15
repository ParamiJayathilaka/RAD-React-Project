import {Component} from "react";
import icon from '../../../images/icon.png'

export class Footer extends Component{
    render() {
        return (
                <div className="p-3 bg-[#0C0C0C]">
                    {<h1 className={"text-1x1 text-secondary text-center"}> Organic Shop</h1>}
                    <p className="text-center text-white">© 2024 Organic Shop. All rights reserved.</p>
                </div>
        )
    }
}