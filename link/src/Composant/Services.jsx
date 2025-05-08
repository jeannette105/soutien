import React from 'react';
import { Link } from 'react-router-dom';
import NEZ from "../Couture/5.jpg";
import NAGE from "../Couture/25.jpg";
import MAGE from "../Couture/20.jpg";
import BOIS from "../Couture/9.jpg";
import SZE from "../Couture/30.jpg";
import ROI from "../Couture/11.jpg";
import ZER from "../Couture/22.jpg";
import RET from "../Couture/13.jpg";
import RER from "../Couture/12.jpg";
import RE from "../Couture/14.jpg";
import HAE from "../Couture/16.jpg";
import HEARD from "../Couture/18.jpg";

const Services = () => {
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
                    text-center items-center ml-10 text-4xl '>La couture et accessoires</h1>
                    <div className=' text-xl text-justify ml-5 mr-5'>
                    La couture est au cœur de l’univers créatif d’Event Love. C’est l’art de 
                    transformer une idée en une pièce unique, en associant tissus, formes et 
                    finitions avec élégance et précision.
                    Tout commence par un croquis inspiré par l’univers de l’événement : mariage, cérémonie, séance photo… 
                    Ce dessin devient ensuite un patron, pensé sur-mesure pour épouser la silhouette et répondre aux attentes 
                    esthétiques. Le choix des tissus et accessoires reflète l’ambiance et le raffinement voulu par Event Love 
                    : dentelles délicates, tulles aériens, boutons nacrés, perles… Les pièces sont découpées avec soin, puis 
                    assemblées et cousues pour créer un vêtement ou un accessoire unique, en parfaite harmonie avec l’événement 
                    célébré.
                    </div>
                    <div className='grid grid-cols-3 gap-10 items-center 
                    justify-items-center text-center relative z-10 p-4 '>
                
                        <img src={NAGE} alt="" className='w-90'/>
                        <img src={NEZ} alt="" className='w-90'/>
                        <img src={MAGE} alt="" className='w-90'/>
                        <img src={BOIS} alt="" className='w-90'/>
                        <img src={SZE} alt="" className='w-90'/>
                        <img src={ROI} alt="" className='w-90'/>
                        <img src={RET} alt="" className='w-90'/>
                        <img src={ZER} alt="" className='w-90'/>
                        <img src={RER} alt="" className='w-90'/>
                        <img src={RE } alt="" className='w-90'/>
                        <img src={HAE} alt="" className='w-90'/>
                        <img src={HEARD} alt="" className='w-90'/>
                    </div>
                </div>
            </div>
            <Link to="/offres/Event Pro" className='text-[19px] m-10 font-semibold text-blue-600'><u>Retournez aux évènements</u></Link>
        </div>
    );
};

export default Services;