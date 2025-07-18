import { ShoppingCartContext } from "../../context";
import { useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import CartDetail from "../../components/cartDetails"



function CartListPage(){

    const { cartItems } = useContext(ShoppingCartContext);
    const navigate = useNavigate();



    return <div>
        <div className="sticky top-0 bg-black text-white p-1 rounded-b-2xl z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white p-4">
        <p className="font-extrabold tracking-widest cursor-pointer ">Pavani Store</p>
         <a href="/cart-list">Cart<sup> {cartItems.length}</sup></a>
      </div>
    </div>
    
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
            My Cart Page
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-4">
                {
                    cartItems?.length ?
                    cartItems.map(singleCartItem=> <CartDetail singleCartItem={singleCartItem}/>)
                    :<h1> No Items in Cart! Please add some items </h1>
                }
            </div>
            <div className="bg-gray-100 rounded-sm p-4 h-max">
                <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
                    Order Summary
                </h3>
                <ul className="text-gray-700 mt-4 space-y-2">
                    <p className="flex flex-wrap gap-4 text-sm font-bold">
                        Total <span>
                            ₹ {cartItems.reduce((acc,curr)=> acc+ curr.totalPrice,0).toFixed(2)}
                        </span>
                    </p>
                </ul>
                <div className="mt-5  flex  gap-2">
                    <button disabled={cartItems.length === 0} onClick={()=> navigate('/ordered')}  className=" disabled:opacity-60 text-sm px-5 py-3 bg-black text-white font-extrabold rounded-xl"> <a href="">Checkout</a></button>
                    <button onClick={()=> navigate("/products")} className="text-sm px-5 py-3 bg-black text-white font-extrabold rounded-xl">Continue Shopping</button>
                </div>
            </div>
        </div>

    </div>
    </div>
}

export default CartListPage;