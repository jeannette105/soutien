import React from 'react';
import { Link } from 'react-router-dom';
import ouf from "../Coiffure/1.jpg";
import fer from "../Coiffure/2.jpg";
import tre from "../Coiffure/3.jpg";
import ger from "../Coiffure/4.jpg";
import hui from "../Coiffure/5.jpg";
import oui from "../Coiffure/6.jpg";
import non from "../Coiffure/7.jpg";
import yes from "../Coiffure/8.jpg";
import rue from "../Coiffure/9.jpg";
import alse from "../Coiffure/10.jpg";
import aime from "../Coiffure/11.jpg";
import arte from "../Coiffure/12.jpg";
import mer from "../Coiffure/13.jpg";


const Coiffure = () => {
     return (
            <div className='mt-35'> 
                <p className='text-xl ml-44 mr-44 text-center font-semibold'>
                    Offrez-vous l’excellence d’un événement sur-mesure, 
                    de la tête aux pieds. De la création de tenues à la 
                    coiffure, de la restauration raffinée à l’hébergement, 
                    en passant par la photographie, nous réunissons tout ce 
                    qu’il faut pour faire de votre événement un moment inoubliable.
                </p>
    
                <div className='flex'>
                    <div className=' W-full bg-amber-50 ml-10 mt-10'>
                        <h1 className='p-5 text-[#C0392B] font-bold 
                        text-center items-center ml-10 text-4xl '>La coiffure et accessoires</h1>
                        <div className=' text-xl text-justify ml-5 mr-5'>
                        La coiffure est au cœur de l’univers créatif d’Event Love. C’est l’art de sublimer une personnalité en accord avec l’instant célébré, qu’il s’agisse d’un mariage, d’une cérémonie ou d’une séance photo.
                        Tout commence par une inspiration, un style imaginé en harmonie avec la tenue, le thème et les envies. Chaque coiffure est pensée sur-mesure : attaches romantiques, chignons sophistiqués, ondulations naturelles ou tresses bohèmes.
                        Le choix des accessoires – peignes ornés, perles, fleurs, voiles – vient parfaire l’ensemble avec délicatesse. Chaque mèche est travaillée avec soin, chaque mouvement est maîtrisé pour créer une mise en beauté qui tient, qui émeut, qui enchante.
                        Chez Event Love, la coiffure n’est pas un détail : c’est une signature, une touche finale qui révèle l’élégance et l’émotion de l’événement.
                        </div>
                        <div className='grid grid-cols-3 gap-10 items-center 
                        justify-items-center text-center relative z-10 p-4 '>
                            <img src={ouf} alt="" className='w-90'/>
                            <img src={fer} alt="" className='w-90'/>
                            <img src={tre} alt="" className='w-90'/>
                            <img src={ger} alt="" className='w-90'/>
                            <img src={hui} alt="" className='w-90'/>
                            <img src={oui} alt="" className='w-90'/>
                            <img src={non} alt="" className='w-90'/>
                            <img src={yes} alt="" className='w-90'/>
                            <img src={rue} alt="" className='w-90'/>
                            <img src={alse} alt="" className='w-90'/>
                            <img src={aime} alt="" className='w-90'/>
                            <img src={arte} alt="" className='w-90'/>
                            <img src={mer} alt="" className='w-90'/>
                        </div>
                    </div>
                </div>
                <Link to="/offres/Event Pro" className='text-[19px] m-10 font-semibold text-blue-600'> <u>Retournez aux évènements</u></Link>
            </div>
        );
};

export default Coiffure;