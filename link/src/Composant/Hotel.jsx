import React from 'react';
import { Link } from 'react-router-dom';
import SZE from "../Hotellerie/1.jpg";
import ZER from "../Hotellerie/2.jpg";
import NAGE from "../Hotellerie/3.jpg";
import MAGE from "../Hotellerie/4.jpg";
import NEZ from "../Hotellerie/5.jpg";
import BOIS from "../Hotellerie/6.jpg";
import ROI from "../Hotellerie/7.jpg";
import RET from "../Hotellerie/8.jpg";
import RER from "../Hotellerie/9.jpg";
import RE from "../Hotellerie/10.jpg";
import HAE from "../Hotellerie/11.jpg";
import HEARD from "../Hotellerie/12.jpg";


const hotel = () => {
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
                       text-center items-center ml-10 text-4xl '>L'Hotellerie/ La salle de fête/ La décoration</h1>
                       <div className=' text-xl text-justify ml-5 mr-5'>
                            L’hôtellerie est au cœur de l’univers d’Event Love. Bien plus qu’un simple lieu d’accueil, elle devient un véritable écrin pour chaque événement, pensé avec soin et raffinement.
                            Qu’il s’agisse d’un mariage, d’une cérémonie ou d’un shooting photo, le choix du lieu est essentiel : il donne le ton, crée l’ambiance, et enveloppe chaque instant d’une atmosphère unique.
                            Château romantique, hôtel intimiste ou espace contemporain, chaque lieu sélectionné par Event Love incarne l’élégance et l’harmonie. Le décor, la lumière, les matières, tout est pensé pour sublimer l’événement et accueillir les invités dans un cadre à la fois chaleureux et prestigieux.
                            De l’art de recevoir à celui de faire vivre une expérience, l’hôtellerie devient un partenaire créatif, au service de la beauté et de l’émotion. Chez Event Love, elle est bien plus qu’un décor : elle est une promesse de confort, de style et d’excellence.
                       </div>
                       <div className='grid grid-cols-3 gap-10 items-center 
                       justify-items-center text-center relative z-10 p-4 '>
                           <img src={SZE} alt="" className='w-90'/>
                           <img src={ZER} alt="" className='w-90'/>
                           <img src={NEZ} alt="" className='w-90'/>
                           <img src={NAGE} alt="" className='w-90'/>
                           <img src={MAGE} alt="" className='w-90'/>
                           <img src={BOIS} alt="" className='w-90'/>
                           <img src={ROI} alt="" className='w-90'/>
                           <img src={RET} alt="" className='w-90'/>
                           <img src={RER} alt="" className='w-90'/>
                           <img src={RE } alt="" className='w-90'/>
                           <img src={HAE} alt="" className='w-90'/>
                           <img src={HEARD} alt="" className='w-90'/>
                       </div>
                   </div>
               </div>
               <Link to="/offres/Event Pro" className='text-[19px] m-10 font-semibold text-blue-600'> <u>Retournez aux évènements</u></Link>
           </div>
       );
};

export default hotel;