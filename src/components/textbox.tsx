import Image from 'next/image'

export default function Textbox(){

    return(
        <form className="textbox--container">
            <input type="text" id="message" name="message" className="textbox--input"/>
            <button type="submit" className="textbox--button">Enviar</button>
        </form>
    )
}