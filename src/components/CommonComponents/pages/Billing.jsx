import { useNavigate } from "react-router"

export default function Billing(){

    const navigate = useNavigate();

    const goToLink = () =>{
       navigate("/cart")
    }

    return(
        <div> 
            <h1>Billing</h1>
            <button onClick={goToLink}>Go To Cart</button>
        </div>
    )
}