"use client"; // This is a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Home(){
    return(
        <main className="home--body">
            <div className="home--container--menu">
                <div className="home--menu">
                    <Link href="/login" className="href--home">Entrar</Link>
                    <Link href="/signup" className="href--home">Cadastrar</Link>
                    <Link href="#" className="href--home">Sobre nós</Link>
                </div> 
            </div>

            <div className="h1--container--home">
                <h1 className="h1--home">Bem-vindo ao ChatXP</h1>
            </div>

            <div className="p--container--home">
                <p>Faça mais, preocupe-se menos. Descubra o ChatXP.</p>
            </div>


            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </main>
    )
}