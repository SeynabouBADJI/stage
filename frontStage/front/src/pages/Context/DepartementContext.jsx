// Dans un fichier context.js (par exemple)
import React, { createContext, useState } from 'react';

const DepartementContext = createContext();

const DepartementProvider = ({ children }) => {
  const [DepartementData, setDepartementData] = useState([
    { id: 1, nom: 'Mathématiques - Physique - Informatique (MPI)' },
    { id: 2, nom: 'Physique -Chimie (PC)' },
    { id: 3, nom: 'Agroforesterie' },
    { id: 4, nom: 'Géographie' },
    { id: 5, nom: 'Lettres Modernes' },
    { id: 6, nom: 'Langues Étrangères Appliquées' },
    { id: 7, nom: 'Histoire et Civilisations' },
    { id: 8, nom: 'Economie – Gestion' },
    { id: 9, nom: 'Sciences Juridiques' },
    { id: 10, nom: 'Tourisme' },
    { id: 11, nom: 'Sociologie' },
    { id: 12, nom: 'Management Informatisé des Organisations ' },
    { id: 13, nom: 'Médecine' },
  
   
  ])

  const updateDepartementData = (newData) => {
    // Implémentez la logique pour mettre à jour les données de cours
    setDepartementData(newData);
  };

  return (
    <DepartementContext.Provider value={{ DepartementData, updateDepartementData }}>
      {children}
    </DepartementContext.Provider>
  );
};

export { DepartementProvider, DepartementContext };
