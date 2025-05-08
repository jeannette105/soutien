import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import contact from "../Propos/Contact.jpg";
import azer from "../Images/Logo Event.jpg";

const Contact = () => {
    const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:500/api/devis')
      .then(res => res.json())
      .then(data => {
        console.log("Réponse du serveur :", data); 
        setData(data);
      })
      .catch(err => console.error('Erreur de fetch :', err));
  }, []);


    return (
        <div>
            <div className='relative mt-35 ml-3 mr-3 '>
                <img src={contact} alt="" className='w-full h-96 object-cover'/>
                 <div className="absolute inset-0 bg-[#C0392B] opacity-30"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className='text-7xl text-[#FFFF]
                        font-bold text-center items-center'>
                        Contactez-nous
                    </h1>
                 </div>
            </div>

            <div className='mt-20 gap-50 flex justify-center items-center'>
                        <div className='w-96 ml-20'>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-[#C0392B] font-bold text-2xl">Event</span>
                                <img src={azer} alt="Logo" className="w-20 h-20 rounded-full shadow-lg
                                 shadow-amber-100" 
                                />
                                <span className="text-[#C0392B] font-bold text-2xl">Love</span>
                            </div>

                            <div className='flex justify-center items-center my-10"'>
                                <div className='border-2 border-amber-600
                                    w-40 mt-5 text-center'>
                                </div>
                            </div>
                                <p className='text-xl text-justify font-semibold
                                    mt-5 '>
                                    Nous vous présentons notre localisation grâce à une carte interactive, 
                                    afin que vous puissiez facilement nous situer et découvrir les 
                                    événements Event Love près de chez vous
                                </p>
                                <span className='text-8xl flex justify-center
                                    text-[#C0392B] mt-5'>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    </span>
                        </div>

                        <div className='rounded-lg overflow-hidden shadow-lg'>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d75436.7326543274!2d2.2972904837623043!3d6.438329362233922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d6.436685!2d2.344337!5e0!3m2!1sfr!2sbj!4v1746628754735!5m2!1sfr!2sbj" 
                                width="600"
                                height="450"
                                frameBorder="0"
                                allowFullScreen=''
                                loading='lasy'
                                referrerPolicy='no-referrer-when-downgrade'
                                className='rounded-2xl'>

                            </iframe>
                        </div>
                    </div>

                    
                        <h1 className='mt-20 mb-10 mr-20 ml-20 text-4xl border-2 text-[#C0392B]
                             border-[#C0392B] text-center font-bold'>
                                Nos coordonnées
                        </h1>

                        <div className='flex justify-between items-center mr-20 ml-20 space-x-12'>
                                    <div className='w-1/2 text-center p-6 bg-[#f9f9f9] rounded-lg shadow-md'>
                                        <span className=' text-7xl text-[#C0392B]'>
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <h1 className='text-2xl font-semibold mt-4'>
                                            Téléphone
                                        </h1>
                                        <p className='mt-2 text-gray-700'>
                                            Service Client: 00 229 01 90 25 41 82
                                            <br />Ce support est disponible du lundi au Dimanche
                                            de 09h à 21h
                                        </p>
                                   </div>

                                   <div className='w-1/2 text-center p-6 bg-[#f9f9f9] rounded-lg shadow-md'>
                                            <span className=' text-7xl text-[#C0392B]'>
                                                <i className="fa-solid fa-envelope-open-text"></i>
                                            </span>
                                        <h1
                                            className='text-2xl font-semibold mt-4'>
                                            Email
                                        </h1>
                                        <p className='mt-2 text-gray-700'>
                                            Pour vos questions et demandes de service, veuillez nous
                                            laisser un message:
                                            <br />
                                                <strong>jeannettetakpara8@gmail.com</strong>
                                        </p>
                                    </div>
                        </div>

                        <div className='flex flex-col m-20'>
                                <marquee behavior="" direction="" 
                                className="text-xl font-semibold text-white mb-15 bg-[#C0392B] text-center py-2 px-4 shadow-2xl shadow-[#C0392B]">
                                    Merci de prendre un moment pour remplir ce formulaire. Il nous permettra 
                                    de mieux comprendre vos besoins et de vous fournir un devis précis pour votre événement.
                                </marquee>    
                            <label htmlFor="fullname"
                                className="block font-normal text-xl text-gray-700">
                                Nom et Prénom :
                            </label>
                            <input type="text"
                                id='fullname'
                                placeholder="Nom et Prénom"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
                            />
                            <label htmlFor="Email" id='Email'
                                className="block font-normal text-xl text-gray-700">
                                Email :
                            </label>
                            <input type="Email"
                                placeholder="Email"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                            <label htmlFor="phone"
                                className="block font-normal text-xl text-gray-700">
                                Téléphone:
                            </label>
                            <input type="tel"
                                id='phone'
                                placeholder="Tél"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                            <label htmlFor="eventdate"
                                className="block font-normal text-xl text-gray-700">
                                Date de l'évènement:
                            </label>
                            <input type="date"
                                id='eventdate'
                                placeholder="Date de l'évènement"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                            <div className=''>
                                <label htmlFor="eventType"
                                    className="block font-normal text-xl text-gray-700">
                                    Sélectionner l'évènement:
                                </label>
                                <select 
                                    defaultValue=""
                                    id="eventType"
                                    className='w-full border mb-5 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300] bg-white'>
                                        <option 
                                        value="" disabled hidden>
                                        </option>
                                        <option value="select">Sélectionner</option>
                                        <option value="soiree">Soirée entre collègues</option>
                                        <option value="retrouvaille">Retrouvailles</option>
                                        <option value="seminaire">Séminaires</option>
                                        <option value="reunion">Réunions</option>
                                        <option value="lancement">Lancement d'un produit</option>
                                        <option value="promotion">Production d'un produit</option>
                                        <option value="mariage">Mariage</option>
                                        <option value="anniversaire">Anniversaire</option>
                                        <option value="bapteme">Baptême</option>
                                        <option value="sortie">Sortie d'enfant</option>
                                        <option value="soiree">Soirée de remise de diplôme</option>
                                        <option value="sortie">Excursion</option>
                                        <option value="soiree">Soirée de gala</option>
                                </select>
                            </div>
                            <label htmlFor="participants"
                                className="block font-normal text-xl text-gray-700">
                                Nombre de participants:
                            </label>
                            <input type="number"
                                min="1"
                                id='participants'
                                placeholder=""
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                            <label htmlFor="budget"
                                className="block font-normal text-xl text-gray-700">
                               Budget ( F CFA ) :
                            </label>
                            <input type="number"
                                min="0"
                                step="100"
                                id='budget'
                                placeholder=""
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                            <div className=''>
                                <label htmlFor="services"
                                    className="block font-normal text-xl text-gray-700">
                                    Sélectionner un ou plusieurs service(s):
                                </label>
                                <select 
                                    id="services"
                                    multiple
                                    className='w-full border mb-5 border-gray-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-[#FF6300] bg-white'>
                                        <option value="couture">Couture</option>
                                        <option value="coiffure">Coiffure</option>
                                        <option value="hotellerie">Hotellerie</option>
                                        <option value="restauration">Restauration</option>
                                        <option value="photo">Photographie</option>
                                </select>
                            </div>
                            
                                <label htmlFor="serviceSuggestion"
                                    className="block font-normal text-xl text-gray-700">
                                    Suggérer un service :
                                </label>
                                <input
                                    id="serviceSuggestion"
                                    type='text'
                                    placeholder="Entrez un service non listé"
                                    className='w-full border mb-5 border-gray-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-[#FF6300] bg-white'/>

                                <label htmlFor="message"
                                    className="block font-normal text-xl text-gray-700">
                                    Message :
                                </label>
                                <textarea
                                    rows="5" 
                                    id="message"
                                    placeholder="Votre message ou remarque..."
                                    className='w-full border mb-5 border-gray-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-[#FF6300] bg-white'>
                                </textarea>
                                <a href="mailto:jeannettetakpara8@gmail.com?subject=Bonjour%20depuis%20mon%20site&body=Bonjour%20Jeannette%2C%0AJe%20vous%20contacte%20concernant..."
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <button className='p-5 bg-[#C0392B] text-white text-xl font-semibold
                                     rounded-md hover:bg-white hover:border-4 hover:text-[#C0392B] hover:border-amber-600 
                                     focus:outline-none transition-all duration-300'>
                                        Envoyez
                                    </button>
                                </a> 
                        </div>  
                        <p className='text-xl mb-15 text-center'>
                        Prêt à rejoindre l'aventure ?  
                        <Link to="/inscription/client">
                            <u className='font-semibold'>Inscrivez-vous ici !</u>
                        </Link>
                        </p>
        </div>
    );
};

export default Contact;