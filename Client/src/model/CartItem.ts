import {ProductModel} from "./productModel";

export interface CartItem{
    product: ProductModel,
    itemCount:number
}