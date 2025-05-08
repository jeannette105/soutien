import React from 'react';
import { Link } from 'react-router-dom';
import couture from "../Event social/2.jpg";
import coiffure from "../Event social/12.jpg";
import hotel from "../Event social/25.jpg";
import cou from "../Event social/44.jpg";
import co from "../Event social/55.jpg";

const Social = () => {
    return (
        <div>
            <div className='mt-35 px-4'>
                <h1 className='text-center text-3xl sm:text-5xl font-bold text-[#C0392B] '>Evènement Social</h1>
                <p className='text-center text-base sm:text-xl m-5'>
                    Chez Event Love, nous croyons que chaque événement social est bien plus qu’un simple 
                    rassemblement : c’est un moment privilégié pour créer du lien, partager des émotions 
                    et marquer les esprits. Qu’il s’agisse d’un anniversaire, d’un mariage, d’une fête familiale,
                    d’une baby shower ou encore d’une soirée privée, nous mettons notre passion et notre expertise 
                    au service de vos envies. Notre équipe vous accompagne avec créativité et rigueur pour concevoir 
                    un événement chaleureux, élégant et entièrement personnalisé, afin que vous puissiez profiter
                    pleinement de chaque instant, l’esprit léger.
                </p>

                <div className='border-2 w-1/4 mb-5 ml-10 mt-10 border-[#C0392B]'></div>

                <div className='flex flex-col lg:flex-row gap-10 px-4'>
                    <div className='lg:w-1/2'>
                        <h2 className='text-2xl sm:text-4xl font-extrabold text-[#C0392B] mt-5'>Nos offres</h2>
                        <p className='text-base sm:text-xl text-justify mt-4'>
                            Chez Event Love, nous croyons que chaque moment fort de votre vie mérite bien plus qu’une simple célébration : il mérite d’être sublimé avec émotion, raffinement et authenticité.
                            Chaque événement est une page de votre histoire, et notre rôle est de la transformer en un souvenir inoubliable, à la hauteur de vos rêves.
                            Nous sommes passionnément engagés dans la création d’événements sur mesure, conçus avec soin pour refléter votre personnalité, vos envies les plus sincères, et l’âme même de ce que
                            vous souhaitez partager. Du premier échange à la dernière note de musique, nous vous accompagnons avec écoute, précision et bienveillance.
                        </p>
                    </div>
                    <div>
                        <ul className="text-base sm:text-xl mt-10 list-disc ml-6">
                            <li className='p-2'>Mariage</li>
                            <li className='p-2'>Anniversaire</li>
                            <li className='p-2'>Baptème</li>
                            <li className='p-2'>Musée et Galerie</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap justify-center gap-4 sm:gap-6 mt-16 bg-amber-50 p-6 sm:p-10'>
                <div className='relative group shadow-2xl shadow-amber-500'>
                    <img src={couture} alt="Couture" className='w-full sm:w-80' />
                    <Link to="/services/couture" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Couture
                        </button>
                    </Link>
                </div>

                <div className='relative group shadow-2xl shadow-amber-400'>
                    <img src={coiffure} alt="Coiffure" className='w-full sm:w-80' />
                    <Link to="/services/coiffure" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Coiffure
                        </button>
                    </Link>
                </div>

                <div className='relative group shadow-2xl shadow-amber-500'>
                    <img src={hotel} alt="Hôtellerie" className='w-full sm:w-80' />
                    <Link to="/services/hotellerie" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Hôtellerie
                        </button>
                    </Link>
                </div>

                <div className='relative group shadow-2xl shadow-amber-400'>
                    <img src={cou} alt="Restauration" className='w-full sm:w-80' />
                    <Link to="/services/restauration" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Restauration
                        </button>
                    </Link>
                </div>

                <div className='relative group shadow-2xl shadow-amber-500'>
                    <img src={co} alt="Photographie" className='w-full sm:w-80' />
                    <Link to="/services/photographie" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Photographie
                        </button>
                    </Link>
                </div>
            </div>
            <Link to="/services/couture" className='text-[19px] m-10 font-semibold text-blue-600'> <u>Retournez aux services</u></Link>
        </div>
    );
};

export default Social;
