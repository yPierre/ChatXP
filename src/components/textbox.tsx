import Image from 'next/image'

export default function Textbox(){

    return(
        <form className="textbox--container">
            <input type="text" className="textbox--input" placeholder="Message ChatXP"/>
            <button type="submit" className="textbox--button">Submit</button>
        </form>
    )
}