import Image from "next/image"

export function Contato() {
    return (
        <section style={{
                    width: '100vw',
                    height: '90vh',
                    margin: 0,
                    padding: 0,
                }}>
            <hr
                style={{
                    width: '90vw',
                    height: '2px',
                    backgroundColor: 'black',
                    margin: '100px auto',
                }}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '60px',
                }}
            >
                {/* Coluna 1 */}
                <div>
                    <ol style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '120px',
                        gap: '30px',
                        padding: 0,
                        fontFamily: 'Instrument Sans',
                        fontSize: '25px',
                        // lineHeight: '2em'
                    }}>
                        <li>
                            <i className="bi bi-google-play" style={{ fontSize: '60px' }}></i>
                        </li>
                        <li><strong>GamePlay</strong></li>
                        <li>GamePasta</li>
                        <li>Pontos da Play Game</li>
                        <li>Vale-presente</li>
                        <li>Resgatar</li>
                    </ol>
                </div>

                {/* Coluna 2 */}
                <div>
                    <ol style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        fontFamily: 'Instrument Sans',
                        fontSize: '25px',
                        marginTop: '100px',
                        marginLeft: '-1100px',
                        // lineHeight: '2em'
                        }}>
                        <li><strong>Crianças e família</strong></li>
                        <li>Guia para a família</li>
                        <li>Compartilhamento em família</li>
                    </ol>
                </div>
            </div>

            {/* Rodapé */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                // flexWrap: 'wrap',
                // padding: '0 5vw',
                fontFamily: 'Instrument Sans',
                fontSize: '20px',
            }}>
                {/* Links do rodapé */}
                <ol style={{
                    display: 'flex',
                    gap: '30px',
                    listStyle: 'none',
                    marginTop: '100px',
                    marginLeft: '-80px'
                }}>
                    <li>Termos de Serviço</li>
                    <li>Privacidade</li>
                    <li>Sobre a Gamefic</li>
                    <li>Desenvolvedores</li>
                    <li>Google Store</li>
                </ol>

                {/* Bandeira e idioma */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginTop: '100px',
                    // marginLeft: '-80px'
                    }}>
                    <div style={{
                        position: 'relative',
                        width: '60px',
                        height: '40px'
                    }}>
                        <Image
                            src="/bandeira.png"
                            alt="Bandeira do Brasil"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div>Brasil (Português (Brasil))</div>
                </div>
            </div>
            <div>
                <ol  style={{
                    display: 'flex',
                    gap: '30px',
                    listStyle: 'none',
                    marginTop: '50px',
                    marginLeft: '130px'
                }}>
                    <li><i className="bi bi-facebook" style={{ fontSize: '40px' }}></i></li>
                    <li><i className="bi bi-controller" style={{ fontSize: '40px' }}></i></li>
                    <li><i className="bi bi-discord" style={{ fontSize: '40px' }}></i></li>
                    <li><i className="bi bi-pinterest" style={{ fontSize: '40px' }}></i></li>
                </ol>
            </div>
        </section>
    )
}

