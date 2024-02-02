"use client"; // This is a client component

import Taskbar from "@/components/taskbar"
import { useState } from 'react';
import WindowMSN from "@/components/windowMSN"
import WindowConversation from "@/components/windowConversation"

interface WindowState {
    [key: string]: string;
}

export default function Board(){
    const [windowState, setWindowState] = useState<WindowState>({
        "msn-messenger": "normal",
        "bot-conversation": "normal",
        // Adicione outros identificadores e estados conforme necessário
    });

    const handleWindowClick = (windowId: keyof WindowState) => {
        setWindowState((prevState) => ({
            ...prevState,
            [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
        }));
    };

    const handleWindowMinimize = (windowId: string) => {
        // Adicione qualquer lógica adicional necessária para minimizar a janela no componente Board
        setWindowState((prevState) => ({
            ...prevState,
            [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
        }));
    };
    return(
        <main className="board--body">
            <div className="wallpaper--container">
                <div className="wallpaper"></div>
            </div>
            <div className="desktop">
                <WindowMSN 
                    windowId="msn-messenger"
                    windowState={windowState["msn-messenger"]}
                    onMinimizeClick={() => handleWindowMinimize("msn-messenger")}
                />
                <WindowConversation 
                    windowId="bot-conversation"
                    windowState={windowState["bot-conversation"]}
                    onMinimizeClick={() => handleWindowMinimize("bot-conversation")}
                />
            </div>
            <Taskbar
                windows={["msn-messenger", "bot-conversation"]}
                windowState={windowState}
                onWindowClick={handleWindowClick}
            />
        </main>
    )
}