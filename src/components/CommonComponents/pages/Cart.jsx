import { useNavigate } from "react-router"

export default function Cart(){

    const navigate = useNavigate();

    function goToLink(){
        navigate("/shipping")
    }

    return(
        <div> <h1>Cart </h1>
           <button onClick={goToLink}>Go To Shipping</button>
        </div>
    )
}