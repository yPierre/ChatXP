import Card from "./card"
import TitleBar from "./titlebar"
import { useState, useEffect } from "react";

interface WindowProps {
    windowId: string;
    windowState: string;
    onMinimizeClick: () => void;
    userData: UserDataItem[];
    onMessageClick: (cardID: number) => void;
    onAddUserClick: () => void;
}

interface HistoryItem {
    id: number;
    name: string;
    message: string;
}

interface UserDataItem {
    id: number;
    title: string;
    history: HistoryItem[];
}

export default function WindowBot({ windowId, windowState, onMinimizeClick, userData, onMessageClick, onAddUserClick  }: WindowProps){

    const [localWindowState, setLocalWindowState] = useState(windowState);

    useEffect(() => {
        // Atualizar o estado local quando o estado externo muda
        setLocalWindowState(windowState);
      }, [windowState]);

    const handleMinimizeClick = () => {
        setLocalWindowState("minimized");
        onMinimizeClick(); // Chame a função do componente pai ao minimizar
    };

    return(
        <div className={`window--msn--container ${localWindowState  === "minimized" ? "minimized" : ""}`}>
            <TitleBar titlebarName="MSN messenger" onMinimizeClick={handleMinimizeClick}/>
            <div className="window--msn--content">
                <div className="window--msn--history">
                    {userData.map((item: UserDataItem) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            lastMessage={item.history.length > 0 ? item.history[item.history.length - 1].message : "No messages"} // Última mensagem
                            onClick={() => onMessageClick(item.id)}
                        />
                    ))}
                </div>
                <div>
                    <button type="button" className="msn--button" onClick={onAddUserClick}>Novo chat</button>
                </div>
            </div>
        </div>
    )
}