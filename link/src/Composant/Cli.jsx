
import React, { useState, useEffect } from 'react';

const Cli = () => {
    const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:500/api/client')
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
                backgroundImage: 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
                minHeight: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div className='mt-35 mb-35 bg-amber-50 p-10 max-w-xl mx-auto shadow-2xl'>
                <h1 className='text-xl font-semibold mb-5 text-[#f83600] text-center'>La connexion d'un client</h1>

                <label htmlFor="username"
                                className="block font-normal text-xl text-gray-700">
                                Nom d'utilisateur :
                            </label>
                            <input type="text"
                                id='username'
                                placeholder="Nom d'utilisateur"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="password"
                                className="block font-normal text-xl text-gray-700">
                                Mot de passe :
                            </label>
                            <input type="password"
                                id='password'
                                placeholder="Mot de passe"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />
                <label htmlFor="confirmpassword"
                                className="block font-normal text-xl text-gray-700">
                                Confirmez le mot de passe :
                            </label>
                            <input type="password"
                                id='confirmpassword'
                                placeholder="Confirmez le mot de passe"
                                className="mt-1 w-full border mb-5 border-gray-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6300]"
                            />

                                <a href="mailto:jeannettetakpara8@gmail.com?subject=Bonjour%20depuis%20mon%20site&body=Bonjour%20Jeannette%2C%0AJe%20vous%20contacte%20concernant..."
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <button className='p-5 bg-[#C0392B] text-white text-xl font-semibold
                                     rounded-md hover:bg-white hover:border-4 hover:text-[#FF6300] hover:border-[#C0392B] 
                                     focus:outline-none transition-all duration-300'>
                                        Envoyez
                                    </button>
                                </a>
            </div>
        </div>
    );
};

export default Cli;