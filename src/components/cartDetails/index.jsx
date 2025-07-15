import { Fragment } from "react";
import {useContext} from "react"
import {ShoppingCartContext} from '../../context';


function CartDetail({singleCartItem}){

    const {handleRemoveFromCart, handleAddtoCart} = useContext(ShoppingCartContext);


    return <Fragment>
        <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
            <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                <img
                src={singleCartItem?.thumbnail}
                className="w-full h-full object-contain"
                />
             </div>
             <div>
                <h3 className="text-base font-bold text-gray-900 ">
                    {singleCartItem?.title}
                </h3>
                <button onClick={()=> handleRemoveFromCart(singleCartItem,true )} className="cursor-pointer text-sm px-5 py-3 bg-black text-white font-extrabold rounded-xl flex items-start">
                    Remove
                </button>
             </div>
             <div className="ml-auto">
                <h3 className="text-lg font-bold text-gray-900">
                    ₹{singleCartItem?.totalPrice.toFixed(2)}
                </h3>
                <p className="mt-2 mb-3 font-bold text-[16px]">Quatity: {singleCartItem?.quantity}</p>
                <div className="mt-3">
                    <button onClick={()=> handleRemoveFromCart(singleCartItem,false )} className="cursor-pointer border border-[#000] px-3 rounded-md hover:bg-black hover:text-white duration-150 disabled:opacity-65" disabled={singleCartItem?.quantity === 1}>-</button>
                    <button onClick={()=> handleAddtoCart(singleCartItem)} className="cursor-pointer border border-[#000] px-3 rounded-md hover:bg-black hover:text-white duration-150">+</button>
                </div>
             </div>
        </div>
    </div>
    <hr className="border-gray-500" />
    </Fragment>
}

export default CartDetail;