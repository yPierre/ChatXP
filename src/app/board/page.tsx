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
        const clickedCard = users.find((item: UserDataItem) => item.id === cardId);
        if (clickedCard) {
            // Se o card correspondente for encontrado, definir o histórico correspondente
            setConversationHistory(clickedCard.history);
            setChatID(clickedCard.id);
        }
    };

    const handleWindowMinimize = (windowId: string) => {
        // Adicione qualquer lógica adicional necessária para minimizar a janela no componente Board
        setWindowState((prevState) => ({
            ...prevState,
            [windowId]: prevState[windowId] === "minimized" ? "normal" : "minimized",
        }));
    };

    const handleAddUser = () => {
        // Obtenha o ID do último item, se houver
        const lastId = users.length > 0 ? users[users.length - 1].id : 0;
        // Crie um novo objeto de dados do usuário com ID único
        const newUser: UserDataItem = {
            id: lastId + 1, // Novo ID baseado no último ID
            title: "Nova conversa", // Título padrão para um novo usuário
            history: [], // Histórico vazio para um novo usuário
        };
        // Adicione o novo usuário ao estado
        setUsers([...users, newUser]);
    };

    const handleAddMessage = (name: string, message: string) => {
        const userIndex = users.findIndex((user: UserDataItem) => user.id === chatID);
        if (userIndex !== -1) { // Verificar se o usuário foi encontrado
            const user = users[userIndex];
            
            // Obter o último ID do histórico do usuário
            const lastId = user.history.length > 0 ? user.history[user.history.length - 1].id : 0;
    
            // Criar a nova mensagem
            const newMessage: HistoryItem = {
                id: lastId + 1, // Novo ID baseado no último ID
                name: name, // Título padrão para um novo usuário
                message: message, // Mensagem fornecida
            };
    
            // Atualizar o estado do histórico do usuário com a nova mensagem
            const updatedHistory = [...user.history, newMessage];

            const updatedUsers = [...users];
            updatedUsers[userIndex] = { ...user, history: updatedHistory };

            setUsers(updatedUsers);
            setConversationHistory(updatedHistory);

            setTimeout(() => {

                const randomIndex = Math.floor(Math.random() * messages.length); // Selecionar um índice aleatório do vetor messages
                const randomMessage = messages[randomIndex];

                const newBotMessage: HistoryItem = {
                    id: lastId + 2, // Novo ID baseado no último ID
                    name: "ChatXP", // Nome do bot
                    message: randomMessage, // Mensagem automática
                };
    
                // Adicionar a mensagem automática do bot ao histórico
                const updatedHistoryWithBotMessage = [...updatedHistory, newBotMessage];
    
                // Atualizar o estado do histórico da conversa com a nova mensagem do bot
                setConversationHistory(updatedHistoryWithBotMessage);
    
                // Atualizar o estado dos usuários com a mensagem do bot
                updatedUsers[userIndex] = { ...user, history: updatedHistoryWithBotMessage };
                setUsers(updatedUsers);
            }, 1000); // Delay de 1 segundo (1000 milissegundos)
        } else {
            console.log("Usuário não encontrado.");
        }
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