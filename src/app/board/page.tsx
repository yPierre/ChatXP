"use client"; // This is a client component

import Taskbar from "@/components/taskbar"
import { useEffect, useState } from 'react';
import WindowMSN from "@/components/windowMSN"
import WindowConversation from "@/components/windowConversation"
const userData = require("../../data.js");
const messages = require("../../bot.js");

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
    const [users, setUsers] = useState(userData);
    const [chatID, setChatID] = useState<number>(0);
    const [conversationHistory, setConversationHistory] = useState<any[]>([]);
    const [windowState, setWindowState] = useState<WindowState>({
        "msn-messenger": "minimized",
        "bot-conversation": "minimized",
    });

    const handleWindowClick = (windowId: keyof WindowState) => {
        setWindowState((prevState) => {
            if (window.innerWidth <= 768) {
                const newState: WindowState = {};
                Object.keys(prevState).forEach((key) => {
                    newState[key as keyof WindowState] = key === windowId ? "normal" : "minimized";
                });
                return newState;
            } else {
                return {
                    ...prevState,
                    [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
                };
            }
        });
    };

    const handleCardClick = (cardId: number) => {
        const clickedCard = users.find((item: UserDataItem) => item.id === cardId);
        if (clickedCard) {
            setConversationHistory(clickedCard.history);
            setChatID(clickedCard.id);
        }
    };

    const handleWindowMinimize = (windowId: string) => {
        setWindowState((prevState) => ({
            ...prevState,
            [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
        }));
    };

    const handleAddUser = () => {
        const lastId = users.length > 0 ? users[users.length - 1].id : 0;
        const newUser: UserDataItem = {
            id: lastId + 1,
            title: "Nova conversa",
            history: [],
        };
        setUsers([...users, newUser]);
    };

    const handleAddMessage = (name: string, message: string) => {
        const userIndex = users.findIndex((user: UserDataItem) => user.id === chatID);
        if (userIndex !== -1) { 
            const user = users[userIndex];
            const lastId = user.history.length > 0 ? user.history[user.history.length - 1].id : 0;
            const newMessage: HistoryItem = {
                id: lastId + 1,
                name: name,
                message: message,
            };
    
            const updatedHistory = [...user.history, newMessage];

            const updatedUsers = [...users];
            updatedUsers[userIndex] = { ...user, history: updatedHistory };

            setUsers(updatedUsers);
            setConversationHistory(updatedHistory);

            setTimeout(() => {

                const randomIndex = Math.floor(Math.random() * messages.length); // Selecionar um índice aleatório do vetor messages
                const randomMessage = messages[randomIndex];

                const newBotMessage: HistoryItem = {
                    id: lastId + 2,
                    name: "ChatXP",
                    message: randomMessage,
                };
    
                const updatedHistoryWithBotMessage = [...updatedHistory, newBotMessage];
                setConversationHistory(updatedHistoryWithBotMessage);
    
                updatedUsers[userIndex] = { ...user, history: updatedHistoryWithBotMessage };
                setUsers(updatedUsers);
            }, 1000);
        } else {
            console.log("Usuário não encontrado.");
        }
    };

    

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setWindowState((prevState) => ({
                ...prevState,
                "msn-messenger": "minimized",
            }));
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
                    userData={users}
                    onMessageClick={handleCardClick}
                    onAddUserClick={handleAddUser}
                />
                <WindowConversation 
                    windowId="bot-conversation"
                    windowState={windowState["bot-conversation"]}
                    onMinimizeClick={() => handleWindowMinimize("bot-conversation")}
                    history={conversationHistory}
                    onAddMessage={handleAddMessage}
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