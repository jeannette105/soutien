import React from 'react';
import { Link } from 'react-router-dom';
import der from "../Restauration/1.jpg";
import zer from "../Restauration/2.jpg";
import nage from "../Restauration/3.jpg";
import mage from "../Restauration/4.jpg";
import nez from "../Restauration/5.jpg";
import bois from "../Restauration/6.jpg";
import roi from "../Restauration/7.jpg";
import ret from "../Restauration/8.jpg";
import rer from "../Restauration/9.jpg";
import re from "../Restauration/10.jpg";
import hae from "../Restauration/11.jpg";
import heard from "../Restauration/12.jpg";
import rete from "../Restauration/13.jpg";
import tyr from "../Restauration/14.jpg";
import tri from "../Restauration/15.jpg";

const Resto = () => {
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
                    text-center items-center ml-10 text-4xl '>La Restauration et desserts</h1>
                    <div className=' text-xl text-justify ml-5 mr-5'>
                        La restauration est au cœur de l’univers d’Event Love. C’est l’art de ravir les sens, de sublimer l’instant à travers une expérience gustative élégante et mémorable.
                        Chaque menu est pensé comme une création sur-mesure, inspirée par l’esprit de l’événement : mariage, cérémonie, réception intime… Les saveurs, les textures et les présentations sont soigneusement choisies pour refléter l’ambiance et l’émotion du moment.
                        Produits de saison, recettes raffinées, dressages délicats : chaque assiette raconte une histoire et participe à la magie de l’événement. Le service, discret et attentionné, accompagne l’expérience avec une exigence d’excellence.
                        Chez Event Love, la restauration ne se contente pas de nourrir : elle enchante, elle rassemble, elle célèbre. Elle devient un prolongement naturel du décor, de la mise en scène, et de l’élégance portée par chaque détail.
                    </div>
                    <div className='grid grid-cols-3 gap-10 items-center 
                    justify-items-center text-center relative z-10 p-4 '>
                        <img src={der} alt="" className='w-90'/>
                        <img src={zer} alt="" className='w-90'/>
                        <img src={nez} alt="" className='w-90'/>
                        <img src={nage} alt="" className='w-90'/>
                        <img src={mage} alt="" className='w-90'/>
                        <img src={bois} alt="" className='w-90'/>
                        <img src={roi} alt="" className='w-90'/>
                        <img src={ret} alt="" className='w-90'/>
                        <img src={rer} alt="" className='w-90'/>
                        <img src={re} alt="" className='w-90'/>
                        <img src={hae} alt="" className='w-90'/>
                        <img src={heard} alt="" className='w-90'/>
                        <img src={rete} alt="" className='w-90'/>
                        <img src={tyr} alt="" className='w-90'/>
                        <img src={tri} alt="" className='w-90'/>
                    </div>
                </div>
            </div>
            <Link to="/offres/Event Pro" className=' relative text-[19px] m-10 font-semibold text-blue-600'> <u>Retournez aux évènements</u></Link>
        </div>
    );
};

export default Resto;