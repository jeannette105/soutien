import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../Images/Logo Event.jpg";
import Coiffure from "../Images/coiffure.jpg";
import Mariage from "../Images/Mariage.jpg";
import Hotel from "../Images/Hotel.jpg";
import Restauration from "../Images/Restaurartion.jpg";
import Photo from "../Images/photo.webp";
import Pro from "../Images/Pro.jpg";
import social from "../Images/social.jpg";
import Student from "../Images/étudiant.jpg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="z-50 w-full bg-[#C0392B] shadow-lg fixed top-0 left-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 gap-20">
                <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-2xl">Event</span>
                    <img src={image} alt="Logo" className="w-20 h-20 rounded-full shadow-lg shadow-amber-100" />
                    <span className="text-white font-bold text-2xl">Love</span>
                </div>

                <button 
                    className="text-white lg:hidden focus:outline-none text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`fixed top-0 left-0 h-full w-64 bg-[#FF6300] text-white p-4 transition-transform duration-300 z-40 lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <button className="text-white text-2xl absolute top-4 right-4" onClick={() => setMenuOpen(false)}>✕</button>
                    <ul className="mt-16 flex flex-col gap-6 text-lg font-semibold items-center text-center">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>ACCUEIL</Link></li>
                        <li><Link to="/propos" onClick={() => setMenuOpen(false)}>A PROPOS</Link></li>
                        <li>
                            <p className="font-bold">NOS SERVICES</p>
                            <ul className="mt-2">
                                <li><Link to="/services/couture" onClick={() => setMenuOpen(false)}>Couture</Link></li>
                                <li><Link to="/services/coiffure" onClick={() => setMenuOpen(false)}>Coiffure</Link></li>
                                <li><Link to="/services/hotel" onClick={() => setMenuOpen(false)}>Hôtellerie</Link></li>
                                <li><Link to="/services/restauration" onClick={() => setMenuOpen(false)}>Restauration</Link></li>
                                <li><Link to="/services/photographie" onClick={() => setMenuOpen(false)}>Photographie</Link></li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-bold">NOS OFFRES</p>
                            <ul className="mt-2">
                                <li><Link to="/offres/Event Pro" onClick={() => setMenuOpen(false)}>Event professionnel</Link></li>
                                <li><Link to="/offres/Event Social" onClick={() => setMenuOpen(false)}>Event social</Link></li>
                                <li><Link to="/offres/Event Student" onClick={() => setMenuOpen(false)}>Event étudiant</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                        <li><Link to="/inscription/client" onClick={() => setMenuOpen(false)}>Inscription (client)</Link></li>
                        <li><Link to="/inscription/prestataire" onClick={() => setMenuOpen(false)}>Inscription (prestataire)</Link></li>
                        <li><Link to="/connexion/prestataire" onClick={() => setMenuOpen(false)}>Connexion (prestataire)</Link></li>
                        <li><Link to="/connexion/client" onClick={() => setMenuOpen(false)}>Connexion (client)</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-8 text-white text-lg font-semibold">
                        <li><Link to="/">ACCUEIL</Link></li>
                        <li><Link to="/propos">A PROPOS</Link></li>
                        <li className="relative group">
                            <Link to="/services/couture">NOS SERVICES</Link>
                            <ul className="absolute bg-amber-50 text-[#FF6300] mt-2 p-4 rounded-md shadow-lg w-56 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <li><Link className="flex items-center gap-2 mb-3" to="/services/couture"><img src={Mariage} className="w-6 h-6 object-cover" alt="Couture" />Couture</Link></li>
                                <li><Link className="flex items-center gap-2 mb-3" to="/services/coiffure"><img src={Coiffure} className="w-6 h-6 object-cover" alt="Coiffure" />Coiffure</Link></li>
                                <li><Link className="flex items-center gap-2 mb-3" to="/services/hotel"><img src={Hotel} className="w-6 h-6 object-cover" alt="Hôtellerie" />Hôtellerie</Link></li>
                                <li><Link className="flex items-center gap-2 mb-3" to="/services/restauration"><img src={Restauration} className="w-6 h-6 object-cover" alt="Restauration" />Restauration</Link></li>
                                <li><Link className="flex items-center gap-2" to="/services/photographie"><img src={Photo} className="w-6 h-6 object-cover" alt="Photographie" />Photographie</Link></li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link to="/offres/Event Pro">NOS OFFRES</Link>
                            <ul className="absolute bg-amber-50 text-[#FF6300] mt-2 p-4 rounded-md shadow-lg w-64 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <li><Link className="flex items-center gap-2 mb-3" to="/offres/Event Pro"><img src={Pro} className="w-6 h-6" alt="Pro" />Event professionnel</Link></li>
                                <li><Link className="flex items-center gap-2 mb-3" to="/offres/Event Social"><img src={social} className="w-6 h-6" alt="Social" />Event social</Link></li>
                                <li><Link className="flex items-center gap-2" to="/offres/Event Student"><img src={Student} className="w-6 h-6" alt="Étudiant" />Event étudiant</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>

                    <div className="flex gap-4 ml-15">
                        <div className="relative group">
                            <Link to="/inscription/client" className="border-2 border-amber-50 text-amber-50 px-4 py-2 rounded hover:bg-amber-50 hover:text-black transition">Inscription</Link>
                            <ul className="absolute bg-amber-50 text-[#FF6300] mt-2 p-4 rounded-md shadow-lg w-64 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <li><Link className="block mb-2" to="/inscription/client">En tant que client</Link></li>
                                <li><Link className="block" to="/inscription/prestataire">En tant que prestataire</Link></li>
                            </ul>
                        </div>

                        <div className="relative group">
                            <Link to="/connexion/prestataire" className="border-2 border-amber-50 text-amber-50 px-4 py-2 rounded hover:bg-amber-50 hover:text-black transition">Connexion</Link>
                            <ul className="absolute bg-amber-50 text-[#FF6300] mt-2 p-4 rounded-md shadow-lg w-64 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <li><Link className="block mb-2" to="/connexion/prestataire">En tant que prestataire</Link></li>
                                <li><Link className="block" to="/connexion/client">En tant que client</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
