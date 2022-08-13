import {useState, useEffect} from 'react';




export const Login2 = () => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(email)
    },[email])

    useEffect(() => {
        console.log(password)
    },[password])

    const handleLogin = () => {
        console.log(email,password);
    }
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
                    <span>Senha</span>
                    <input 
                        type="password"
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