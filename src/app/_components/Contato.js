import Image from 'next/image';
import styles from './Contato.css';

export function Contato() {
    return (
        <section className='contatoContainer'>
            <hr className='divider'/>

            <div className='mainContent'>
                <div className='column'>
                    <ul className='menuList'>
                        <li className='iconItem'>
                            <i className="bi bi-google-play"></i>
                        </li>
                        <li className='boldItem'>GamePlay</li>
                        <li>GamePasta</li>
                        <li>Pontos da Play Game</li>
                        <li>Vale-presente</li>
                        <li>Resgatar</li>
                    </ul>
                </div>

                <div className='column'>
                    <ul className='menuList'>
                        <li className='boldItem'>Crianças e família</li>
                        <li>Guia para a família</li>
                        <li>Compartilhamento em família</li>
                    </ul>
                </div>
            </div>

            <div className='footerContent'>
                <ul className='footerLinks'>
                    <li>Termos de Serviço</li>
                    <li>Privacidade</li>
                    <li>Sobre a Gamefic</li>
                    <li>Desenvolvedores</li>
                    <li>Google Store</li>
                </ul>

                <div className='languageSelector'>
                    <div className='flagContainer'>
                        <Image
                            src="/bandeira.png"
                            alt="Bandeira do Brasil"
                            fill
                            className='flagImage'
                        />
                    </div>
                    <span>Brasil (Português (Brasil))</span>
                </div>
            </div>

            <div className='socialIcons'>
                <ul>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-controller"></i></li>
                    <li><i className="bi bi-discord"></i></li>
                    <li><i className="bi bi-pinterest"></i></li>
                </ul>
            </div>
        </section>
    );
}