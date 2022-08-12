import { useNavigate } from "react-router-dom";

export const Login = () => {

    let navigate = useNavigate();

    async function handleClick() {
        await navigate("/", { replace: true });
    }
    return (
        <div>
            <button onClick={handleClick}>
                Initial page
            </button>
        </div>
    )
}