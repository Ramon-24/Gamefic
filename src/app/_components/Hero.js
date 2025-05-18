import Image from 'next/image';
import '../_components/Hero.css'

export function Hero() {
    return (
        <section className='hero_body'>
            <nav>
                <ul>

                    <li>
                        <div style={{
                            position: 'relative',
                            width: '65px',
                            height: '65px'
                        }}>
                            <Image
                                src="/logoGamefic.png"
                                alt='Logo'
                                style={{ objectFit: 'cover' }}
                                fill
                            />
                        </div>
                    </li>

                    <li>
                        <form>
                            <input
                                className='input'
                                type="text"
                                name="input"
                                // value="Perquisar"
                                placeholder="Pesquisar"
                            />
                            <div className='search'>
                                <i className="bi bi-search"></i>
                            </div>
                        </form>
                    </li>

                    <div className='navr'>

                        <li>
                            Entrar
                        </li>

                        <li>
                            Inscrever-se
                        </li>

                        <li>
                            <select className='seletor_ling'>

                                <option placeholder="pt">
                                    Português BR
                                </option>

                                <option placeholder="en">
                                    Englês
                                </option>

                                <option placeholder="es">
                                    Espanhol
                                </option>

                            </select>
                        </li>

                    </div>
                </ul>
            </nav>

            <div>
                <div
                    className='text-aprest'>
                <h2>Aprender nunca foi tão divertido</h2>
            </div>
            <div className='text-logo'>
                <h1>Gamefic</h1>
            </div>
            <div style={{ position: 'relative', width: '70px', height: '70px' }}>
                <Image
                    src="/mouse.png"
                    alt='Mouse'
                    style={{ objectFit: 'cover' }}
                    fill
                />
            </div>
            <div style={{ position: 'relative', width: '900px', height: '900px', }}>
                <Image
                    src="/criancas.png"
                    alt='Crianças'
                    style={{ objectFit: 'cover' }}
                    fill
                />
            </div>
        </div>
        </section >
    );
};