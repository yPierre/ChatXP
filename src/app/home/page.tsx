"use client"; // This is a client component

import { useState } from 'react';

export default function Home(){
    return(
        <main className="home--body">
            <div className="home--container--menu">
                <div className="home--menu">
                    <a href="#" className="href--home">Login</a>
                    <a href="#" className="href--home">Cadastrar</a>
                    <a href="#" className="href--home">Sobre nós</a>
                </div> 
            </div>

            <div className="h1--container--home">
                <h1 className="h1--home">Bem-vindo ao ChatXP</h1>
            </div>

            <div className="p--container--home">
                <p>Faça mais, preocupe-se menos.</p>
                <p>Descubra o Windows XP.</p>
            </div>


            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </main>
    )
}