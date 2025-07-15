import {createContext, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


export const ShoppingCartContext = createContext(null);
function ShoppingCartProvider({children}){
   const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate();

    async function fetchListOfProducts(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        if(result && result?.products){
            setListOfProducts(result.products)
            setLoading(false)
        }
    }

     function handleAddtoCart(getProductDetails){
        
        let cpyExistingItems = [...cartItems];

        const findIndexOfCurrentItem = cpyExistingItems.findIndex(cartItem=> cartItem.id === getProductDetails.id );
        console.log(findIndexOfCurrentItem)
        if( findIndexOfCurrentItem === -1){
            cpyExistingItems.push({
                ...getProductDetails,
                quantity : 1,
                totalPrice : getProductDetails?.price
            });
        }else{
            console.log('added one more')
              cpyExistingItems[findIndexOfCurrentItem] = {
                ...cpyExistingItems[findIndexOfCurrentItem],
                quantity : cpyExistingItems[findIndexOfCurrentItem].quantity +1,
                totalPrice : (cpyExistingItems[findIndexOfCurrentItem].quantity +1) *  cpyExistingItems[findIndexOfCurrentItem].price,
              }
        }
        console.log(cpyExistingItems);
        setCartItems(cpyExistingItems);
        localStorage.setItem('cartItems',JSON.stringify(cpyExistingItems) );
        navigate("/cart-List")
    }

    


    function handleRemoveFromCart(getProductDetails, isFUllyRemoveFromCart)
    {
        let cpyExistingItems = [...cartItems];
        const findIndexOfCurrentCartItem = cpyExistingItems.findIndex(item=> item.id === getProductDetails.id)

        if(isFUllyRemoveFromCart){
            cpyExistingItems.splice(findIndexOfCurrentCartItem, 1)
        }else{
            cpyExistingItems[findIndexOfCurrentCartItem] = {
                ...cpyExistingItems[findIndexOfCurrentCartItem],
                quantity : cpyExistingItems[findIndexOfCurrentCartItem].quantity -1,
                totalPrice : (cpyExistingItems[findIndexOfCurrentCartItem].quantity -1) *  cpyExistingItems[findIndexOfCurrentCartItem].price,

            }
        }
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingItems));
        setCartItems(cpyExistingItems)
    }

    useEffect(()=>{
        fetchListOfProducts();
        const cartData = localStorage.getItem('cartItems');
setCartItems(cartData ? JSON.parse(cartData) : []);
    },[])

    console.log(listOfProducts)

    return <ShoppingCartContext.Provider value={{listOfProducts, loading, setLoading,  productDetails, setProductDetails,handleAddtoCart,cartItems,handleRemoveFromCart }}>{children}</ShoppingCartContext.Provider>




}

export default ShoppingCartProvider;

 

   