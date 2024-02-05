import TitleBar from "./titlebar";
import Textbox from "./textbox";
import Card2 from "./card2"
import { useState, useEffect  } from "react";

interface WindowProps {
    windowId: string;
    windowState: string;
    onMinimizeClick: () => void;
    history: HistoryItem[];
    onAddMessage: (name: string, message: string) => void;
}

interface HistoryItem {
    id: number;
    name: string;
    message: string;
}


export default function WindowConversation({ windowId, windowState, onMinimizeClick, history, onAddMessage }: WindowProps){

    const [localWindowState, setLocalWindowState] = useState(windowState);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        setLocalWindowState(windowState);
    }, [windowState]);

    const handleMinimizeClick = () => {
        setLocalWindowState("minimized");
        onMinimizeClick();
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            onAddMessage("Você", newMessage);
            setNewMessage("");
        }
    };


    return(
        <div className={`window--conversation--container ${localWindowState === "minimized" ? "minimized" : ""}`}>
            <TitleBar titlebarName="Bot - Conversation" onMinimizeClick={handleMinimizeClick}/>
            <div className="window--conversation--content">
                <div className="window--conversation--history">
                    {history.map((item: HistoryItem) => (
                        <Card2
                            key={item.id}
                            name={item.name}
                            message={item.message}
                        />
                    ))}
                </div>
                <Textbox
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onSendMessage={handleSendMessage}
                /> 
            </div>
        </div>
    )
}