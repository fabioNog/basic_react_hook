import { Link } from "react-router-dom";
import { useRef } from "react";

const Button = () => {
    return(
        <Link to={"/login"}>
            Login
        </Link>
    )
    
}

export const Dashboard = () => {
    const counterRef = useRef(0);
    return (
        
        <div>
            <p>Dashboard</p>
            <p>Contador: {counterRef.current}</p>
            <button onClick={() => counterRef.current++}>
                Somar
            </button>

            <Button/>
        </div>
    )
}