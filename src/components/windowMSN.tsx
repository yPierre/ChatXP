import Card from "./card"
import TitleBar from "./titlebar"
import { useState, useEffect } from "react";

interface WindowProps {
    windowId: string;
    windowState: string;
    onMinimizeClick: () => void;
}

export default function WindowBot({ windowId, windowState, onMinimizeClick }: WindowProps){

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
            <TitleBar titlebarName="Msn messenger" onMinimizeClick={handleMinimizeClick}/>
            <div className="window--msn--content">
                <div className="window--msn--history">
                    <Card
                        title="Música Pop dos anos 80"
                        lastMessage="Claro, vou sugerir mais algumas músicas de festa pop dos anos 80 e 90 cantadas por mulheres que contêm refrãos com 'Oh oh oh' ou têm um apelo festivo:"
                    />
                    <Card
                        title="O que é o z-index"
                        lastMessage="Poderia me explicar o que é o z-index em CSS"
                    />

                    <Card
                        title="Ajudar a resolver o jogo do sapo"
                        lastMessage="Poderia me ajudar a passar do nível 2 do jogo do sapo?"
                    />
                    <Card
                        title="Como centralizar uma div"
                        lastMessage="Eu estou com dificuldade em centralizar uma div"
                    />
                    <Card
                        title="O que é o z-index"
                        lastMessage="Poderia me explicar o que é o z-index em CSS"
                    />

                    <Card
                        title="Ajudar a resolver o jogo do sapo"
                        lastMessage="Poderia me ajudar a passar do nível 2 do jogo do sapo?"
                    />
                    <Card
                        title="Como centralizar uma div"
                        lastMessage="Eu estou com dificuldade em centralizar uma div"
                    />
                    <Card
                        title="O que é o z-index"
                        lastMessage="Poderia me explicar o que é o z-index em CSS"
                    />

                    <Card
                        title="Ajudar a resolver o jogo do sapo"
                        lastMessage="Poderia me ajudar a passar do nível 2 do jogo do sapo?"
                    />
                    <Card
                        title="Ajudar a resolver o jogo do sapo"
                        lastMessage="Poderia me ajudar a passar do nível 2 do jogo do sapo?"
                    />
                </div>
                <div>
                    <button type="submit" className="msn--button">Novo chat</button>
                </div>
            </div>
        </div>
    )
}