import TitleBar from "./titlebar";
import Textbox from "./textbox";
import Card2 from "./card2"
import { useState, useEffect  } from "react";

interface WindowProps {
    windowId: string;
    windowState: string;
    onMinimizeClick: () => void;
}


export default function WindowConversation({ windowId, windowState, onMinimizeClick }: WindowProps){

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
        <div className={`window--conversation--container ${localWindowState === "minimized" ? "minimized" : ""}`}>
            <TitleBar titlebarName="Bot Conversation" onMinimizeClick={handleMinimizeClick}/>
            <div className="window--conversation--content">
                <div className="window--conversation--history">
                    <Card2
                        title="You"
                        lastMessage="Eu ouvi um trecho de uma musica ha pouco tempo e não consegui entender a letra. Poderia me ajudar a descobrir o nome da musica, sei que era uma das mais populares nos anos 80 ou 90, acho que é pop com um pouco de eletrônica, cantada por uma mulher e é dos Estados Unidos. Só consegui entender em uma parte assim: Oh oh oh"
                    />
                    <Card2
                        title="ChatXP"
                        lastMessage="Entendo que você está procurando uma música popular dos anos 80 ou 90 cantada por uma mulher dos Estados Unidos, com um toque de música eletrônica, e você só conseguiu entender a parte 'Oh oh oh'. A descrição é um pouco genérica, já que muitas músicas poderiam se encaixar nesse perfil. No entanto, vou sugerir algumas músicas populares que correspondem a essa descrição:

                                    Sweet Child o' Mine - Guns N' Roses (1987)
                                    I Will Always Love You - Whitney Houston (1992)
                                    Vogue - Madonna (1990)
                                    Like a Prayer - Madonna (1989)
                                    Bizarre Love Triangle - New Order (1986)
                    
                                    Por favor, forneça mais detalhes se possível, como parte das letras, um trecho mais distintivo ou qualquer outra informação que possa ajudar a identificar a música com mais precisão."
                    />
                    <Card2
                        title="You"
                        lastMessage="É uma música de festa e é pop"
                    />
                    <Card2
                        title="ChatXP"
                        lastMessage="Com base na sua descrição de que a música é popular, pop e adequada para festas, dos anos 80 ou 90, cantada por uma mulher dos Estados Unidos, pode ser difícil identificar uma música específica com apenas a parte 'Oh oh oh'. No entanto, aqui estão algumas músicas de festa pop que poderiam se encaixar na sua descrição:

                            Walking on Sunshine - Katrina and The Waves
                            Girls Just Want to Have Fun - Cyndi Lauper
                            Holiday - Madonna
                            I Wanna Dance with Somebody - Whitney Houston
                            Material Girl - Madonna
                    
                            Se você puder fornecer mais detalhes ou lembrar de mais letras da música, ficaria mais fácil identificar a canção."
                    />
                    <Card2
                        title="You"
                        lastMessage="Não é nenhuma dessa poderia me sugerir outras?"
                    />
                    <Card2
                        title="ChatXP"
                        lastMessage="Claro, vou sugerir mais algumas músicas de festa pop dos anos 80 e 90 cantadas por mulheres que contêm refrãos com 'Oh oh oh' ou têm um apelo festivo:

                                    Gloria - Laura Branigan
                                    Physical - Olivia Newton-John
                                    Groove Is in the Heart - Deee-Lite
                                    Rhythm Is a Dancer - Snap!
                                    Believe - Cher
                                    Wannabe - Spice Girls
                                    Finally - CeCe Peniston
                                    I Love Rock 'n' Roll - Joan Jett & The Blackhearts
                    
                                    Lembre-se de que a combinação de elementos específicos da música, como as letras e o trecho 'Oh oh oh', pode ajudar a identificar a música com mais precisão. Se nenhuma dessas sugestões corresponder à música que você está procurando, fornecer mais detalhes sobre a letra ou a melodia seria útil."
                    />
                </div>
                <Textbox/>
            </div>
        </div>
    )
}