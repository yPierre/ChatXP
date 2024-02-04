import Image from 'next/image'

interface TextboxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: () => void;
}

export default function Textbox({ value, onChange, onSendMessage }: TextboxProps){
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita quebra de linha
            onSendMessage(); // Chama a função onSendMessage quando Enter é pressionado
        }
    };

    return(
        <form className="textbox--container">
            <input 
                type="text" 
                id="message" 
                name="message" 
                className="textbox--input"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <button 
                type="button" 
                className="textbox--button"
                onClick={onSendMessage}
            >
                Enviar
            </button>
        </form>
    )
}