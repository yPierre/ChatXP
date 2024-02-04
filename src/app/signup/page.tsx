"use client"; // This is a client component

import SignUpForm from "@/components/signupform"
import Link from 'next/link';

export default function SignUp(){
    return(
        <div>
            <div className="backhome--button">
                <Link href="/home">Home</Link>
            </div>
            <SignUpForm/>
            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </div>
    )
}