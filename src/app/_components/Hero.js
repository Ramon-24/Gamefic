'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../_components/Hero.css';

const translations = {
    pt: {
        subtitle: "Aprender nunca foi tão divertido",
        title: "GAMEFIC",
        login: "Entrar",
        signup: "Inscrever-se",
        placeholder: "Pesquisar"
    },
    es: {
        subtitle: "Aprender nunca fue tan divertido",
        title: "GAMEFIC",
        login: "Iniciar sesión",
        signup: "Regístrate",
        placeholder: "Buscar"
    },
    en: {
        subtitle: "Learning has never been so fun",
        title: "GAMEFIC",
        login: "Login",
        signup: "Sign Up",
        placeholder: "Search"
    }
};

export function Hero() {
    const [language, setLanguage] = useState('pt');

    // Carregar idioma salvo no localStorage
    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang) {
            setLanguage(storedLang);
        }
    }, []);

    // Sempre que mudar o idioma, salva no localStorage
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = translations[language];

    return (
        <section className='hero_body'>
            <nav className='nav-top'>
                <ul>
                    <div className='logo'>
                        <Image
                            src="/logoGamefic.png"
                            alt='Logo'
                            fill
                            style={{ 
                                objectFit: 'contain'}}
                            priority
                        />
                    </div>

                    <form>
                        <input
                            className='input'
                            type="text"
                            name="input"
                            placeholder={t.placeholder}
                        />
                        <div className='search'>
                            <i className="bi bi-search"></i>
                        </div>
                    </form>

                    <div className='navr'>
                        <li>{t.login}</li>
                        <li>{t.signup}</li>
                        <li>
                            <select
                                className='seletor_ling'
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="pt">Português (PT-BR)</option>
                                <option value="es">Español (Latam)</option>
                                <option value="en">English (US)</option>
                            </select>
                        </li>
                    </div>
                </ul>
            </nav>

            <div>
                <div className='text-aprest'>
                    <h2>{t.subtitle}</h2>
                </div>

                <div className='text-logo'>
                    <h1>{t.title}</h1>
                </div>

                <div className='mousePosition'>
                    <Image
                        src="/mouse.png"
                        alt='Mouse'
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <main className='trioCriancas'>
                    <div className='crianca1'>
                        <Image
                            src="/crianca1.png"
                            alt='Crianças'
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className='crianca2'>
                        <Image
                            src="/crianca2.png"
                            alt='Crianças'
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className='crianca3'>
                        <Image
                            src="/crianca3.png"
                            alt='Crianças'
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}
