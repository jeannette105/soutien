import React from 'react';
import { Link } from 'react-router-dom';
import couture from "../Event social/1.jpg";
import coiffure from "../Event social/13.jpg";
import hotel from "../Event social/23.jpg";
import Restau from "../Event social/26.jpg";
import Res from "../Event social/30.jpg";

const Student = () => {
    return (
        <div>
            <div className='mt-35 px-4'>
                <h1 className='text-center text-3xl sm:text-5xl font-bold text-[#C0392B]'>Evènement Etudiant</h1>
                <p className='text-center text-base sm:text-xl m-5'>
                    Chez Event Love, nous savons que les événements étudiants sont des moments clés de la vie 
                    universitaire, riches en énergie, en partage et en souvenirs inoubliables. Que vous planifiez 
                    un gala de fin d’année, une journée d'intégration, une remise de diplômes, un week-end 
                    d'association ou une soirée thématique, notre équipe vous accompagne pour créer un événement 
                    dynamique, festif et parfaitement adapté à votre public. Avec une organisation sur mesure et 
                    une ambiance à la hauteur de vos attentes, vous pouvez vous concentrer sur l’essentiel : vivre 
                    pleinement l’expérience.
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
                            <li className='p-2'>Soirée de remise de diplôme</li>
                            <li className='p-2'>Excursion</li>
                            <li className='p-2'>Journée culturelle</li>
                            <li className='p-2'>Soirée de gala</li>
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
                    <img src={Restau} alt="Restauration" className='w-full sm:w-80' />
                    <Link to="/services/restauration" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className='p-3 sm:p-4 bg-[#C0392B] text-white font-semibold rounded hover:bg-pink-600 transition duration-300 text-base sm:text-xl'>
                            Restauration
                        </button>
                    </Link>
                </div>

                <div className='relative group shadow-2xl shadow-amber-500'>
                    <img src={Res} alt="Photographie" className='w-full sm:w-80' />
                    <Link to="/photographie" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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

export default Student;
