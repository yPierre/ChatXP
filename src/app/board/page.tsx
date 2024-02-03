"use client"; // This is a client component

import Taskbar from "@/components/taskbar"
import { useEffect, useState } from 'react';
import WindowMSN from "@/components/windowMSN"
import WindowConversation from "@/components/windowConversation"
const userData = require("../../data.js");

interface WindowState {
    [key: string]: string;
}

interface UserDataItem {
    id: number;
    title: string;
    history: HistoryItem[];
}

interface HistoryItem {
    id: number;
    name: string;
    message: string;
}

export default function Board(){
    const [conversationHistory, setConversationHistory] = useState<any[]>([]);
    const [windowState, setWindowState] = useState<WindowState>({
        "msn-messenger": "normal",
        "bot-conversation": "normal",
        // Adicione outros identificadores e estados conforme necessário
    });

    const handleWindowClick = (windowId: keyof WindowState) => {
        setWindowState((prevState) => {
            // Se a largura da tela for menor ou igual a 768px, minimize as janelas
            if (window.innerWidth <= 768) {
                const newState: WindowState = {};
                Object.keys(prevState).forEach((key) => {
                    newState[key as keyof WindowState] = key === windowId ? "normal" : "minimized";
                });
                return newState;
            } else {
                // Se a largura da tela for maior que 768px, minimize apenas a janela clicada
                return {
                    ...prevState,
                    [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
                };
            }
        });
    };

    const handleCardClick = (cardId: number) => {
        // Encontrar o card correspondente com base no ID
        const clickedCard = userData.find((item: UserDataItem) => item.id === cardId);
        if (clickedCard) {
            // Se o card correspondente for encontrado, definir o histórico correspondente
            setConversationHistory(clickedCard.history);
        }
    };

    const handleWindowMinimize = (windowId: string) => {
        // Adicione qualquer lógica adicional necessária para minimizar a janela no componente Board
        setWindowState((prevState) => ({
            ...prevState,
            [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Se a largura da tela for menor ou igual a 768px, minimize todas as janelas
                setWindowState((prevState) => {
                    const newState: WindowState = {};
                    Object.keys(prevState).forEach((key) => {
                        newState[key as keyof WindowState] = "minimized";
                    });
                    return newState;
                });
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
                    userData={userData}
                    onMessageClick={handleCardClick}
                />
                <WindowConversation 
                    windowId="bot-conversation"
                    windowState={windowState["bot-conversation"]}
                    onMinimizeClick={() => handleWindowMinimize("bot-conversation")}
                    history={conversationHistory}
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