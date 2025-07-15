import orderGif from '../../assets/orderGif.gif'
import {useNavigate} from "react-router-dom";




function Ordered(){
    const navigate  = useNavigate()
    return <div className="flex flex-col justify-center items-center h-screen ">
        <img 
        src={orderGif}
        alt="Loading..."
         />
         <button onClick={()=>navigate("/products")} className="  mt-5 min-w-[200px] px-4 py-3 border border=[#333]  bg-black text-sm text-white font-semibold
                 rounded cursor-pointer">Continue Shopping</button>
    </div>
}

export default Ordered;