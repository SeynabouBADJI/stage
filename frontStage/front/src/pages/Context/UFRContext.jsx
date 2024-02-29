import React, { createContext, useState } from 'react';

const UFRContext = createContext();

const UFRProvider = ({ children }) => {
  const [UFRData, setUFRData] = useState([
    { id: 1, nom: 'UFR ST(Science Et Technologie)' },
    { id: 2, nom: 'UFR SES(sciences économiques et sociales)' },
    { id: 3, nom: 'UFR 2S(Science De La Sante)' },
    { id: 4, nom: 'UFR LASHU(lettres, arts et sciences humaines )' }
  ])

  const updateUFRData = (newData) => {
    // Implémentez la logique pour mettre à jour les données de cours
    setUFRData(newData);
  };

  return (
    <UFRContext.Provider value={{ UFRData, updateUFRData }}>
      {children}
    </UFRContext.Provider>
  );
};

export { UFRProvider, UFRContext };
