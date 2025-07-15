import {useNavigate} from 'react-router-dom'
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";


function ProductItem({singleProductDetail}){

    const navigate = useNavigate();

    const {handleAddtoCart, cartItems} = useContext(ShoppingCartContext)

    function handleNavigateToProductDetailPage(getCurrentProductId){
        navigate(`/product-details/${getCurrentProductId}`)
    }

    return <div className="relative group border border-cyan-700 p-6 cursor-pointer">
        <div className=" overflow-hidden aspect-w-1 aspect-h-1">
            <img src={singleProductDetail?.thumbnail} 
            alt={singleProductDetail?.title}
             className=" object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
            />
        </div>
        <div className="flex items-start justify-between mt-4 space-x-2">
          <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
             <p className="w-[125px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductDetail?.title}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">₹{singleProductDetail?.price}</p>
          </div>
        </div>
        <button onClick={()=> handleNavigateToProductDetailPage(singleProductDetail?.id)} className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg ">
          View Details
        </button>
        <button disabled={ cartItems.findIndex(item=> item.id === singleProductDetail.id) > -1} onClick={()=>handleAddtoCart(singleProductDetail)} className=" disabled:opacity-65  disabled:bg-gray-300 mt-5 min-w-[200px] px-4 py-3 border border=[#333] bg-transparent text-sm font-semibold
                 rounded cursor-pointer">Add To Cart</button>
        </div>
}

export default ProductItem;