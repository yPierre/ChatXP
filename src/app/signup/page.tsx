"use client"; // This is a client component

import SignUpForm from "@/components/signupform"

export default function SignUp(){
    return(
        <div>
            <SignUpForm/>
            <div className="wallpaper--container">
                <div className="bg--wallpaper"></div>
            </div>
        </div>
    )
}