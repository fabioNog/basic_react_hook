import { Link } from "react-router-dom";

const Button = () => {
    return(
        <Link to={"/login"}>
            Login
        </Link>
    )
    
}

export const Dashboard = () => {
    return (
        <div>
            <Button/>
        </div>
    )
}