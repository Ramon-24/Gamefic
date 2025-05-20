import Image from "next/image"
import '../_components/Informativo.css'

export function Inform() {
    return (
        <main className="inform_body">
            <div>
                <h1 className="titulo">Descubra como o Gamefic funciona </h1>
            </div>
            <section className="coluna">

                <nav>
                    <div className="caixa">
                        <div className='circulo'>
                            <div className="icon">
                                <i className="bi bi-puzzle"></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Jogos educativos</h3>
                            <p>Desafios por leitura como matemática, leitura e ciências.</p>
                        </div>
                    </div>

                    <div className="caixa">
                        <div className='circulo'>
                            <div className="icon">
                                <i className="bi bi-journal-text"></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Atividades Criativas</h3>
                            <p>Desenhar, colorir e criação de histórias próprias</p>
                        </div>
                    </div>
                </nav>

                <nav>
                    <div>
                        <video
                            src="/gif.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                objectFit: 'cover',
                                width: '145px',
                                height: '145px',
                                position: 'absolute',
                                top: "300px",
                                left: "710px",
                                borderRadius: "8px",
                                zIndex: "1"
                            }}
                        />
                    </div>
                    <div className="cell">
                        <Image
                            src='/cell.png'
                            alt='Celular'
                            style={{
                                objectFit: 'cover',
                            }}
                            fill
                        />
                    </div>
                    <div className="play">
                        <i className="bi bi-collection-play-fill"></i>
                    </div>
                </nav>

                <nav>
                    <div className="caixa">
                        <div className='circulo'>
                            <div className="icon">
                                <i className="bi bi-palette"></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Histórias interativas</h3>
                            <p>Personagens te levam por aventuras enquanto você aprende</p>
                        </div>
                    </div>

                    <div className="caixa">
                        <div className='circulo'>
                            <div className="icon">
                                <i className="bi bi-hand-thumbs-up"></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Recomendado por profissionais</h3>
                            <p>Recomendado para todas as fases iniciais das turminhas</p>
                        </div>
                    </div>
                </nav>

            </section>
        </main>
    )
}