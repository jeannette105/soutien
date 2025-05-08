import React from 'react';
import { Link } from 'react-router-dom';
import FIT from "../Photographie/1.jpg";
import GHI from "../Photographie/2.jpg";
import GUI from "../Photographie/3.jpg";
import JIF from "../Photographie/4.jpg";
import KIO from "../Photographie/5.jpg";
import SOI from "../Photographie/6.jpg";
import KOI from "../Photographie/7.jpg";
import JET from "../Photographie/8.jpg";
import UOI from "../Photographie/9.jpg";
import RUE from "../Photographie/10.jpg";


const Photo = () => {
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
                    text-center items-center ml-10 text-4xl '>La Photographie</h1>
                    <div className=' text-xl text-justify ml-5 mr-5'>
                    La photographie est au cœur de l’univers créatif d’Event Love. C’est l’art de capturer l’instant, de figer l’émotion et de raconter une histoire à travers l’image. Chaque cliché révèle l’atmosphère d’un événement unique : mariage, cérémonie, séance photo…
                    Tout commence par une écoute attentive et une sensibilité artistique. Le regard du photographe s’imprègne de l’univers imaginé, des détails soignés, des tenues sur-mesure, des coiffures élégantes.
                    La lumière, les couleurs, les cadrages sont choisis avec précision pour sublimer chaque instant. Rien n’est laissé au hasard : un geste, un regard, un éclat de rire… chaque photographie devient un souvenir précieux, à la fois esthétique et sincère.
                    Chez Event Love, la photographie prolonge la magie de l’instant, en capturant l’émotion avec justesse et élégance.
                    </div>
                    <div className='grid grid-cols-3 gap-10 items-center 
                    justify-items-center text-center relative z-10 p-4 '>
                        <img src={FIT} alt="" className='w-90'/>
                        <img src={GHI} alt="" className='w-90'/>
                        <img src={GUI} alt="" className='w-90'/>
                        <img src={JIF} alt="" className='w-90'/>
                        <img src={KIO} alt="" className='w-90'/>
                        <img src={SOI} alt="" className='w-90'/>
                        <img src={KOI} alt="" className='w-90'/>
                        <img src={JET} alt="" className='w-90'/>
                        <img src={UOI} alt="" className='w-90'/>
                        <img src={RUE } alt="" className='w-90'/>
                    </div>
                </div>
            </div>
            <Link to="/offres/Event Pro" className='text-[19px] m-10 font-semibold text-blue-600'> <u>Retournez aux évènements</u></Link>
        </div>
    );
};

export default Photo;