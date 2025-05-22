"use client";
import { useState, useRef } from "react";
import Image from 'next/image';
import './Informativo.css';

export function Inform() {
    const [showModal, setShowModal] = useState(false);
    const videoRef = useRef(null);
    const phoneVideoRef = useRef(null);

    const handlePlay = () => {
        setShowModal(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 300);
    };

    const handleClose = () => {
        videoRef.current?.pause();
        setShowModal(false);
    };

    return (
        <div className='container'>
            <h1 className='mainTitle'>Descubra como a Gamefic funciona</h1>

            <div className='contentWrapper'>
                {/* Coluna Esquerda *
                <div className='featuresColumn'>
                    <FeatureCard
                        icon="bi bi-puzzle"
                        title="Jogos educativos"
                        text="Desafios por leitura como matemática, leitura e ciências."
                    />
                    <FeatureCard
                        icon="bi bi-journal-text"
                        title="Atividades Criativas"
                        text="Desenhar, colorir e criação de histórias próprias"
                    />
                </div>

                {/* Centro - Celular com Animação */}
                <div className='phoneContainer'>
                    <div className='phoneFrame'>
                        <Image
                            src="/cell.png"
                            alt="Celular"
                            fill
                            className='phoneImage'
                            priority
                        />
                        <video
                            ref={phoneVideoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='phoneVideo'
                        >
                            <source src="/gif.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <button
                        className='playButton'
                        onClick={handlePlay}
                        aria-label="Assistir vídeo"
                    >
                        <i className="bi bi-play-fill"></i>
                    </button>
                </div>

                {/* Coluna Direita */}
                <div className='featuresColumn'>
                    <FeatureCard
                        icon="bi bi-palette"
                        title="Histórias interativas"
                        text="Personagens te levam por aventuras enquanto você aprende"
                    />
                    <FeatureCard
                        icon="bi bi-hand-thumbs-up"
                        title="Recomendado por profissionais"
                        text="Recomendado para todas as fases iniciais das turminhas"
                    />
                </div>
            </div>

            {/* modal do vídeo :) */}
            {showModal && (
                <div className='modalOverlay'>
                    <div className='modalContent'>
                        <button
                            className='closeButton'
                            onClick={handleClose}
                            aria-label="Fechar vídeo"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                        <video
                            ref={videoRef}
                            controls
                            className='modalVideo'
                        >
                            <source src="/public/bob-esponja-uma-hora-depois.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos. 
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

function FeatureCard({ icon, title, text }) {
    return (
        <div className='featureCard'>
            <div className='iconCircle'>
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}
