import React from 'react';
import { Link } from 'react-router-dom'; 
import mage from "../Accueil/IMG9.jpg";
import vue from "../Accueil/IMG1.jpg";
import ame from "../Accueil/IMG4.webp";
import eux from "../Accueil/IMG6.jpg";
import zer from "../Accueil/IMG7.jpg";
import zue from "../Accueil/IMG8.jpg";
import aze from "../Accueil/IMG9.jpg";
import axe from "../Accueil/Img5.webp";
import yes from "../Accueil/IMG10.webp";

const Accueil = () => {
    return (
        <div className="relative mt-28">
            <div 
                className="w-full bg-cover bg-center min-h-[530px] flex flex-col lg:flex-row"
                style={{ backgroundImage: `url(${mage})` }}
            >
                <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
                
                <div className="relative z-10 w-full lg:w-1/2 m-5 p-4">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-[#C0392B]">
                        Bienvenue chez Event Love.
                    </h1>
                    <p className="mt-8 text-lg sm:text-xl font-semibold text-black">
                        Votre solution événementielle tout-en-un
                    </p>
                    <h3 className="text-justify mt-10 text-base font-semibold sm:text-lg text-black">
                        Spécialistes de l’organisation sur mesure, nous croyons que chaque événement mérite d’être unique, raffiné et inoubliable. 
                        C’est pourquoi nous avons réuni en un seul lieu tout le savoir-faire nécessaire pour 
                        sublimer vos plus beaux moments. De la couture sur mesure à la coiffure élégante, en passant 
                        par une hôtellerie chaleureuse et une restauration savoureuse, notre équipe met tout en œuvre 
                        pour créer une expérience complète et harmonieuse. Avec Event Love, 
                        vivez l’excellence de l’événementiel sans souci, du premier détail jusqu’à l’ultime émotion.
                    </h3>
                    
                    <Link to="/contact">
                        <button className="mt-10 bg-[#C0392B] p-5 text-lg sm:text-xl rounded-sm border-2 text-amber-50 hover:bg-amber-50 hover:text-black transition">
                            Votre devis
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 flex flex-wrap gap-4 justify-center w-full lg:w-1/2 p-4">
                    <img src={vue} alt="Image 1" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={axe} alt="Image 2" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={ame} alt="Image 3" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={eux} alt="Image 4" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={yes} alt="Image 5" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={zer} alt="Image 6" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={zue} alt="Image 7" className="w-24 sm:w-32 md:w-44 object-contain" />
                    <img src={aze} alt="Image 8" className="w-24 sm:w-32 md:w-44 object-contain" />
                </div>
            </div>

            <div className="relative m-6 md:m-20 flex flex-col md:flex-row justify-between gap-6">
                <div className="w-full md:w-1/4 p-6 bg-amber-50 text-black text-left shadow-2xl hover:text-[#FF6300] transition-all duration-500 tracking-wide">
                    <span className='text-7xl'><i className="fa-solid fa-award"></i></span>
                    <h3 className="font-bold text-2xl mt-4">Excellence</h3>
                    <p className="text-[18px]">
                        L’exigence du détail, l’élégance du geste et la qualité irréprochable de chaque prestation.
                    </p>
                </div>
                <div className="w-full md:w-1/4 p-6 bg-amber-50 text-black text-left shadow-2xl hover:text-[#FF6300] transition-all duration-500 tracking-wide">
                    <span className='text-7xl'><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                    <h3 className="font-bold text-2xl mt-4">Personnalisation</h3>
                    <p className="text-[18px]">
                        Des événements uniques, pensés sur mesure pour refléter l’identité et les rêves de chaque client.
                    </p>
                </div>
                <div className="w-full md:w-1/4 p-6 bg-amber-50 text-black text-left shadow-2xl hover:text-[#FF6300] transition-all duration-500 tracking-wide">
                    <span className='text-7xl'><i className="fa-solid fa-feather"></i></span>
                    <h3 className="font-bold text-2xl mt-4">Hospitalité & Chaleur</h3>
                    <p className="text-[18px]">
                        Un accueil sincère, une ambiance conviviale, et un soin particulier porté à chaque invité.
                    </p>
                </div>
                <div className="w-full md:w-1/4 p-6 bg-amber-50 text-black text-left shadow-2xl hover:text-[#FF6300] transition-all duration-500 tracking-wide">
                    <span className='text-7xl'><i className="fa-solid fa-hand-holding-heart"></i></span>
                    <h3 className="font-bold text-2xl mt-4">Harmonie & Sérénité</h3>
                    <p className="text-[18px]">
                        Une organisation fluide, pour une expérience émotionnelle, forte 
                        et parfaitement maîtrisée pour un rendement positif.
                    </p>
                </div>
            </div>
            <Link to="/offres/Event Pro" className='absolute text-[19px] font-semibold text-blue-600'> <u>Parcourez nos services</u></Link>
        </div>
    );
};

export default Accueil;
