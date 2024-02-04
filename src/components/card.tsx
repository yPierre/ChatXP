import Image from 'next/image'

interface CardProps {
    title: string;
    lastMessage: string;
    onClick: (message: string) => void; // Função de retorno de chamada para manipular o clique
}

export default function Card({title, lastMessage, onClick}: CardProps) {
    const maxLengthTitle = 20;
    const maxLengthText = 29;

    const displayTextTitle = title.length > maxLengthTitle
        ? title.slice(0, maxLengthTitle) + '...'
        : title;

    const displayTextMessage = lastMessage.length > maxLengthText
        ? lastMessage.slice(0, maxLengthText) + '...'
        : lastMessage;

    const handleClick = () => {
        onClick(lastMessage);
    };

    return(
        <div className="card--container" onClick={handleClick}>
            <Image className="card--image" 
                src="/2.png" 
                width={36}
                height={36}
                alt="imgTeste" />
            <div className="card--content">
                <h3>{displayTextTitle}</h3>
                <p>{displayTextMessage}</p>
            </div>
        </div>
    )
}