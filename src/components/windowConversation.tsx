import TitleBar from "./titlebar";
import Textbox from "./textbox";
import Card2 from "./card2"
import { useState, useEffect  } from "react";

interface WindowProps {
    windowId: string;
    windowState: string;
    onMinimizeClick: () => void;
    history: HistoryItem[];
}

interface HistoryItem {
    id: number;
    name: string;
    message: string;
}


export default function WindowConversation({ windowId, windowState, onMinimizeClick, history }: WindowProps){

    const [localWindowState, setLocalWindowState] = useState(windowState);

    useEffect(() => {
        // Atualizar o estado local quando o estado externo muda
        setLocalWindowState(windowState);
    }, [windowState]);

    const handleMinimizeClick = () => {
        setLocalWindowState("minimized");
        onMinimizeClick(); // Chame a função do componente pai ao minimizar
    };

    console.log('History:', history);

    return(
        <div className={`window--conversation--container ${localWindowState === "minimized" ? "minimized" : ""}`}>
            <TitleBar titlebarName="Bot - Conversation" onMinimizeClick={handleMinimizeClick}/>
            <div className="window--conversation--content">
                <div className="window--conversation--history">
                    {history.map((item: HistoryItem) => (
                        <Card2
                            key={item.id}
                            name={item.name}
                            message={item.message} // Última mensagem
                        />
                    ))}
                </div>
                <Textbox/>
            </div>
        </div>
    )
}