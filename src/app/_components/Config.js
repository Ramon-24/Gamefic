import Image from "next/image";
import '../_components/Config.css';

export function Config() {
    return (
        <main className="config_body">
            <section className="configuracoes">
                {/* Imagem de fundo */}
                <div className="background_image">
                    <Image
                        src="/fundo.png"
                        alt="Fundo"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                {/* Conteúdo em cima da imagem */}
                <div className="text_config">
                    <h1 className="text-conf">Configurações</h1>

                    <div className="text-conteiner">
                        <div className="text1">
                            <h3 className="text-size">Estou impressionado com como meu filho ficou mais motivado para estudar. Ele vê as tarefas como desafios divertidos e se sente mais confiante ao aprender. A gamificação realmente transformou nossa rotina escolar!</h3>
                        </div>
                        <div className="text1">
                            <h3 className="text-size">Finalmente encontrei uma forma prática e moderna de acompanhar o desenvolvimento escolar do meu filho. Muito fácil de usar!</h3>
                        </div>
                        <div className="text1">
                            <h3 className="text-size">As notas do meu filho melhoraram muito desde que começamos a usar a Gamefic. Ele aprendeu a gostar de estudar!</h3>
                        </div>
                    </div>

                </div>
            </section>
            <section className="inform">
                <div className="fundo_inform">
                    <div className="caderno_wrapper">
                        <div className="caderno">
                            <img src="/caderno.png" alt="Caderno" className="caderno_imagem" />
                        </div>

                        <div className="pageInform">
                            <div className="pageInform-text">
                                <h2 className="text-title">Transforme o aprendizado em diversão!</h2>
                                <p className="text-paragrafo">Com a Gamefic, seu filho aprende enquanto se diverte. Nossa plataforma de gamificação transforma matérias escolares em desafios empolgantes, mantendo os alunos motivados e engajados.</p>
                            </div>
                            <div className="pageInform-button">
                                <h4 className="text-button">Iniciar com site</h4>
                            </div>
                        </div>

                        <div className="menina">
                            <Image
                                src="/crianca1.png"
                                alt="Menina"
                                className="menina_imagem"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
