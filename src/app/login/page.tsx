"use client"; // This is a client component

import LoginForm from "@/components/loginform"

export default function Login(){
    return(
        <div>
            <LoginForm/>
            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </div>
    )
}