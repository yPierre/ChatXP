import Image from 'next/image'

export default function Card2(props: any){
    const {title, lastMessage} = props;

    const imagePath = title === 'You' ? '/1.png' : '/2.png';

    return(
        <div className="card2--container">
            <Image className="card--image" 
                src={imagePath} 
                width={36}
                height={36}
                alt="imgTeste" />
            <div className="card2--content">
                <h3>{title}</h3>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}