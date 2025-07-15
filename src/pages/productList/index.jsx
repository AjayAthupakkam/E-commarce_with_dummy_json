import { useContext } from "react";
import {ShoppingCartContext} from '../../context';
import '../../App.css'
import ProductItem from '../../components/productItem'


function ProductList(){

    const {listOfProducts, loading, cartItems} = useContext(ShoppingCartContext);
    console.log(listOfProducts);

    if(loading) return <h1>Loading data....</h1>
    return <div>
     <div className="sticky top-0 bg-black text-white p-1 rounded-b-2xl z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white p-4">
        <p className="font-extrabold tracking-widest cursor-pointer ">Pavani Store</p>
         <a href="/cart-list">Cart<sup> {cartItems.length}</sup></a>
      </div>
    </div>
  
         <section className="py-10 bg-white sm:py-16 lg:py-20">
        
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">Our Products</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10 lg:gap-8 lg:grid-cols-4">
                {
                    listOfProducts && listOfProducts?.length >0 ?
                    listOfProducts.map(singleProductDetail=> <ProductItem singleProductDetail={singleProductDetail} key={singleProductDetail?.id}/>)
                    : <h2>No Product Items Found</h2> 
                }
            </div>
        </div>
    </section>
    </div>
    
}

export default ProductList;