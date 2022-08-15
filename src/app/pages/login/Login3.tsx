import {useState, useMemo} from 'react';

export const Login3 = () => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 5;
    },[email])

    

    const handleLogin = () => {
        console.log(email,password);
    }
    return (
        
        <div>
            <p>O tamanho do email eh {emailLength}</p>
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