import orderGif from '../../assets/orderGif.gif'



function Ordered(){
    return <div className="flex justify-center items-center h-screen ">
        <img 
        src={orderGif}
        alt="Loading..."
         />
    </div>
}

export default Ordered;