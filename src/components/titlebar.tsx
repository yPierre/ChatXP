import Image from 'next/image'

interface TitleBarProps {
    onMinimizeClick: () => void;
}

export default function TitleBar({ onMinimizeClick }: TitleBarProps){
    return(
        <div className="titlebar--container">
            <div className="titlebar--text">A title bar</div>
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