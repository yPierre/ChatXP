import { FormEvent } from 'react'
import Link from 'next/link';


export default function LoginForm(props: any){

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        window.location.href = '/board';
    }

    return(
        <div className="loginform--container">
            <form className="loginform--validate"onSubmit={handleSubmit}>
                <label>Usuário:</label><br/>
                <input className="loginform--input" type="text" id="username" name="username"/><br/>
                <label>Senha:</label><br/>
                <input className="loginform--input" type="password" id="password" name="password"/><br/><br/>
                <button type="submit" id="loginBtn">Entrar</button><br/>
                <div className="loginform--link">
                    <p>Não tem uma conta?</p>
                    <Link href="/signup">Cadastre-se</Link>
                </div>
            </form>

        </div>
    )
}