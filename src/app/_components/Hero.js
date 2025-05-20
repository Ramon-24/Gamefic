import Image from 'next/image';
import '../_components/Hero.css'
// import '../_components/Hero_respns.css'

export function Hero() {
    return (
        <section className='hero_body'>
            <nav>
                <ul>

                    <li>
                        <div className='logo'>
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

                                <option placeholder="es">
                                    Espanhol
                                </option>

                                <option placeholder="en">
                                    Inglês
                                </option>

                            </select>
                        </li>

                    </div>
                </ul>
            </nav>

            <div>
                <div className='text-aprest'>
                    <h2>Aprender nunca foi tão divertido</h2>
                </div>

                <div className='text-logo'>
                    <h1>GAMEFIC</h1>
                </div>

                <div className='mousePosition'>
                    <Image
                        src="/mouse.png"
                        alt='Mouse'
                        className='mouseImag'
                        fill
                    />
                </div>

                <main className='trioCriancas'>

                    <div className='crianca1'>
                        <Image
                            src="/crianca1.png"
                            alt='Crianças'
                            fill
                            />
                    </div>

                    <div className='crianca2'>
                        <Image
                            src="/crianca2.png"
                            alt='Crianças'
                            fill
                            />
                    </div>

                    <div className='crianca3'>
                        <Image
                            src="/crianca3.png"
                            alt='Crianças'
                            fill
                        />
                    </div>
                </main>
            </div>
        </section >
    );
};