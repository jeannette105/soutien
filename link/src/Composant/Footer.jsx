import React from 'react';
import image from "../Images/Logo Event.jpg";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-10 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-[#C0392B] font-bold text-2xl">Event</span>
                <img 
                    src={image} 
                    alt="Logo" 
                    className="w-12 h-12 rounded-full" 
                />
                <span className="text-[#C0392B] font-bold text-2xl">Love</span>
            </div>

            <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium text-lg">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/propos">A propos</Link></li>
                <li><Link to="/services/couture">Nos services</Link></li>
                <li><Link to="/offres/Event Pro">Nos offres</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className='mt-5'>
            <span className='text-2xl'><i className="fa-brands fa-facebook"></i></span>
            <span className='ml-10 text-2xl'><i className="fa-brands fa-square-instagram"></i></span>
            <span className='ml-10 text-2xl'><i className="fa-brands fa-tiktok"></i></span>
            </div>
            <div className="w-[570px] h-px bg-[#FF6300] mt-7"></div>
            <div className='mt-5'><p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p></div>
        </div>
    );
};

export default Footer;
