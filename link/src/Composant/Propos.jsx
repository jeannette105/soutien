import React from 'react';
import { Link } from 'react-router-dom';
import cou from "../Propos/COU.jpg";
import coi from "../Propos/COI.jpg";
import cop from "../Propos/COP.jpg";
import sur from "../Propos/sur mesure.webp";

const Propos = () => {
    return (
        <div className="px-4 sm:px-10">
            <div className='mt-36 flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20'>
                <div className='w-full sm:w-1/2'>
                    <img src={cou} className="w-[350px] sm:w-[500px] object-cover mx-auto" alt="Image 1" />
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold text-[#FF6300] mt-8 sm:mt-16'>
                        Présentation de Event Love
                    </h1>
                    <p className='text-sm sm:text-xl mt-5 text-justify'>
                        Event Love est une entreprise spécialisée dans la création d’événements sur mesure. 
                        Nous croyons fermement que chaque moment mérite d’être célébré de manière exceptionnelle et personnalisée. 
                        Notre équipe passionnée vous accompagne dans la conception, l’organisation et la réalisation de vos événements, 
                        en apportant une touche d’élégance, de raffinement et d’innovation à chaque étape.
                        De la création de tenues sur mesure à l’animation, en passant par la restauration et l’accueil, nous mettons un point
                        d’honneur à offrir une expérience incomparable. Chez Event Love, notre objectif est de faire de 
                        chaque événement un instant unique et inoubliable.
                    </p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 mt-20'>
                <div className='w-full sm:w-1/2'>
                    <img src={coi} className="w-[350px] sm:w-[500px] object-cover mx-auto" alt="Image 2" />
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold text-[#FF6300] mt-8 sm:mt-0'>
                        L’objectif de Event Love
                    </h1>
                    <p className='text-sm sm:text-xl mt-5 text-justify'>
                        Comme objectif nous voulons faire de chaque événement un moment d’exception. 
                        En mettant à votre service une équipe spécialisée, nous garantissons une organisation sur mesure et une expérience de qualité 
                        supérieure. Que ce soit pour un mariage, une soirée privée ou un événement professionnel, nous nous engageons à offrir une 
                        prestation qui dépasse vos attentes. Chaque détail est soigneusement pensé pour que votre événement soit une véritable œuvre
                        d'art, où l’émotion et la perfection se rencontrent.
                    </p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 mt-20'>
                <div className='w-full sm:w-1/2'>
                    <img src={cop} className="w-[350px] sm:w-[500px] object-cover mx-auto" alt="Image 3" />
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold text-[#FF6300] mt-8 sm:mt-0'>
                        La mission de Event Love
                    </h1>
                    <p className='text-sm sm:text-xl mt-5 text-justify'>
                        Nous voulons offrir des expériences événementielles d’exception, en combinant créativité, professionnalisme et souci du détail. 
                        Nous aspirons à rendre chaque célébration unique en apportant une dimension personnalisée à tous les aspects de l’événement, de la scénographie 
                        à la prestation culinaire, de l’animation à l’hébergement. Notre équipe d’experts met tout en œuvre pour transformer 
                        vos rêves en réalité, en créant des moments authentiques et mémorables qui reflètent vos valeurs et vos attentes.
                    </p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 mt-20'>
                <div className='w-full sm:w-1/2'>
                    <img src={sur} className="w-[350px] sm:w-[500px] object-cover mx-auto" alt="Image 4" />
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold text-[#FF6300] mt-8 sm:mt-0'>
                        L’Art de l’Événement sur Mesure
                    </h1>
                    <p className='text-sm sm:text-xl mt-5 mb-5 text-justify'>
                        Nous savons que chaque événement est un reflet de la personnalité et des désirs de ceux qui le vivent. Notre mission est de donner vie à vos projets en alliant savoir-faire, créativité et attention aux moindres détails.
                        Nous proposons une gamme complète de services, allant de la création de tenues sur mesure à la conception de décors raffinés, en passant par des repas 
                        gastronomiques et des animations uniques. Transformer chaque occasion en un souvenir impérissable, en veillant à ce que chaque instant soit vécu avec intensité et élégance.
                    </p>
                </div>
            </div>
            <Link to="/" className='text-[19px] mt-10 font-semibold text-blue-600'> <u> Retour à l'accueil</u></Link>
        </div>
    );
};

export default Propos;
