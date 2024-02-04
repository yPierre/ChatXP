"use client"; // This is a client component

import LoginForm from "@/components/loginform"
import Link from 'next/link';

export default function Login(){
    return(
        <div className="login--page">
            <div className="backhome--button">
                <Link href="/home">Home</Link>
            </div>
            <LoginForm/>
            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </div>
    )
}