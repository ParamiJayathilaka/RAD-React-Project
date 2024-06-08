import React, {Component} from 'react';

interface ModifyCartProps{

}

interface ModifyCartState{
    itemCount:number;

}

class ModifyCart extends Component <ModifyCartProps , ModifyCartState>{

    constructor(props:ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    render() {
        let {itemCount} = this.state;

        const increaseItemCount = () :void => {
            // alert('Add');
            this.setState({
                itemCount: ++itemCount
            })
        }

        const decreaseItemCount = () :void => {
            // alert('Remove');
            this.setState({
                itemCount: --itemCount
            })
        }

        return (
           <>
               <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
                   <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={decreaseItemCount}> - </button>
                   <small className="text-[8px]">{itemCount}</small>
                   <button className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={increaseItemCount}> + </button>

               </div>
           </>
        );
    }
}

export default ModifyCart;