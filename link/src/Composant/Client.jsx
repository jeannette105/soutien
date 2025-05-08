
import React, { useState, useEffect } from 'react';

const client = () => {
    const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:500/api/clie/register')
      .then(res => res.json())
      .then(data => {
        console.log("Réponse du serveur :", data); 
        setData(data);
      })
      .catch(err => console.error('Erreur de fetch :', err));
  }, []);
    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
                minHeight: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div className='mt-35 mb-35 bg-amber-50 p-10 max-w-xl mx-auto shadow-2xl'>
                <h1 className='text-xl font-semibold mb-5 text-[#f83600] text-center'>Inscrivez-vous en tant qu'un client</h1>

                <label htmlFor="name"
                                className="block font-normal text-xl text-gray-700">
                                Nom :
                            </label>
                            <input type="text"
                                id='name'
                                placeholder="Nom"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="firstname"
                                className="block font-normal text-xl text-gray-700">
                                Prénom :
                            </label>
                            <input type="text"
                                id='firstname'
                                placeholder="Prénom"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="email"
                                className="block font-normal text-xl text-gray-700">
                                Email :
                            </label>
                            <input type="email"
                                id='email'
                                placeholder="Prénom"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="phone"
                                className="block font-normal text-xl text-gray-700">
                                Tel :
                            </label>
                            <input type="tel"
                                id='phone'
                                placeholder="Tel"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="city"
                                className="block font-normal text-xl text-gray-700">
                                Ville:
                            </label>
                            <input type="text"
                                id='city'
                                placeholder="Ville"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />

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
        </div>
    );
};

export default client;