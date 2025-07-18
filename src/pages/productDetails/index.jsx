import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetails, setProductDetails, loading, setLoading,cartItems, setCartItems,handleAddtoCart } = useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  
 

  if (loading) return <h2>Fetching Product Details...</h2>;

  return (
    <div>
      <div className="sticky top-0 bg-black text-white p-1 rounded-b-2xl z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white p-4">
        <p className="font-extrabold tracking-widest cursor-pointer ">Pavani Store</p>
         <a href="/cart-list">Cart<sup> {cartItems.length}</sup></a>
      </div>
    </div>
  
       <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6 ">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              className="w-4/5 rounded object-cover"
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
            />
          </div>
          <div className=" mt-6 flex flex-wrap justify-center gap-6 mx-auto ">
            {productDetails?.images?.length
              ? productDetails?.images.map((imageItem) => (
                  <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                    <img
                      src={imageItem}
                      className="w-24 "
                      alt="Product secondary image"
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-2xl   font-extrabold text-[#333333]">
                {
                    productDetails?.title
                }
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-xl font-bold">₹{productDetails?.price}</p>
            </div>
            <div className="flex flex-col ">
                <button disabled={ productDetails? cartItems.findIndex(item=> item.id === productDetails.id) > -1: false} onClick={()=>handleAddtoCart(productDetails)} className=" disabled:opacity-65  disabled:bg-gray-300 mt-5 min-w-[200px] px-4 py-3 border border=[#333] bg-transparent text-sm font-semibold
                 rounded cursor-pointer">Add to Cart</button>
                 <button onClick={()=>navigate("/cart-List")} className="  mt-5 min-w-[200px] px-4 py-3 border border=[#333] bg-black text-sm text-white font-semibold
                 rounded cursor-pointer">Go to Cart</button>
                 <button onClick={()=>navigate("/products")} className="  mt-5 min-w-[200px] px-4 py-3 border border=[#333] bg-black text-sm text-white font-semibold
                 rounded cursor-pointer">Back</button>
            </div>
          </div>
      </div>
    </div>

    </div>
  );
}

export default ProductDetails;
