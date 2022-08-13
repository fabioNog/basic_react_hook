import {useState} from 'react';




export const Login2 = () => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email);
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
                    <input type="password"/>
                </label>

                <button onClick={handleLogin}>
                    Entrar
                </button>
            </form>
            
        </div>
    )
}