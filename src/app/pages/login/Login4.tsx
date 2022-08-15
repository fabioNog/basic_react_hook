import {useState, useCallback,useEffect} from 'react';

export const Login4 = () => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(email)
    },[email])

    useEffect(() => {
        console.log(password)
    },[password])

    const handleLogin = useCallback(() => {
        console.log(email,password)
    },[email,password]);
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input 
                        value={email}
                        onChange={e =>  setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    <span>Password</span>
                    <input 
                        type={password}
                        value={password}
                        onChange={e =>  setPassword(e.target.value)}
                    />
                </label>
                

                <button onClick={handleLogin}>
                    Entrar
                </button>
            </form>
            
        </div>
    )
}