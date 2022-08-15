import {useState, useCallback,useEffect,useRef} from 'react';

export const Login5 = () => { 
    
    const inputPassworRef = useRef<HTMLInputElement>(null);

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
                        onKeyDown={e => e.key === 'Enter' ? inputPassworRef.current?.focus() : undefined }
                    />
                </label>
                <label htmlFor="">
                    <span>Password</span>
                    <input 
                        ref={inputPassworRef}
                        type={password}
                        value={password}
                        onChange={e =>  setPassword(e.target.value)}
                    />
                </label>
                

                <button type="button" onClick={handleLogin}>
                    Entrar
                </button>
            </form>
            
        </div>
    )
}