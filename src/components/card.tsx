import Image from 'next/image'

export default function Card(props: any){
    const {title, lastMessage} = props;
    const maxLengthTitle = 20;
    const maxLengthText = 30;

    const displayTextTitle = title.length > maxLengthTitle
        ? title.slice(0, maxLengthTitle) + '...'
        : title;

    const displayTextMessage = lastMessage.length > maxLengthText
        ? lastMessage.slice(0, maxLengthText) + '...'
        : lastMessage;

    return(
        <div className="card--container">
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