import { FormEvent } from 'react'
import Link from 'next/link';

export default function LoginForm(props: any){
    return(
        <div className="loginform--container">
            <form className="loginform--validade">
                <label>Usuário:</label><br/>
                <input className="loginform--input" type="text" id="username" name="username"/><br/>
                <label>Senha:</label><br/>
                <input className="loginform--input" type="password" id="password" name="password"/><br/><br/>
                <button type="submit" id="loginBtn">Entrar</button><br/>
                <p>Não tem uma conta?</p><Link href="/signup" className="">Cadastre-se</Link>
            </form>

        </div>
    )
}