import Image from 'next/image'

interface TitleBarProps {
    titlebarName: string;
    onMinimizeClick: () => void;
}

export default function TitleBar({ titlebarName, onMinimizeClick }: TitleBarProps){
    return(
        <div className="titlebar--container">
            <div className="titlebar--text">{titlebarName}</div>
            <div className="titlebar--controls">
                <Image className="titlebar--button custom-image"
                    src="/close-button.svg"
                    width={18}
                    height={18}
                    alt="Close"
                />
                <Image className="titlebar--button"
                    src="/maximize-button.svg"
                    width={18}
                    height={18}
                    alt="Maximize"
                />
                <Image className="titlebar--button"
                    src="/minimize-button8.svg"
                    width={18}
                    height={18}
                    alt="Minimize"
                    onClick={onMinimizeClick}
                />
            </div>
        </div>
        
    )
}