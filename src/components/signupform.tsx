import { FormEvent } from 'react'
import Link from 'next/link';


export default function SignUp(props: any){
    return(
        <div className="signupform--container">
            <form className="signupform--validade">
                <label>Usuário:</label><br/>
                <input className="signupform--input" type="text" id="username" name="username"/><br/>
                <label>Senha:</label><br/>
                <input className="signupform--input" type="password" id="password" name="password"/><br/>
                <label>Repita sua senha:</label><br/>
                <input className="signupform--input" type="password" id="repassword" name="repassword"/><br/><br/>
                <button type="submit" id="loginBtn">Cadastrar</button><br/>
                <p>Já tem uma conta?</p><Link href="/login" className="">Entre</Link>
            </form>

        </div>
    )
}