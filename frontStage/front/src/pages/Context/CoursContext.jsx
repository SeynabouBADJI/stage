// Dans un fichier context.js (par exemple)
import React, { createContext, useState } from 'react';

const CoursContext = createContext();

const CoursProvider = ({ children }) => {
  const [coursData, setCoursData] = useState([
    { id: 1,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 2,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 3,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 4,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 5,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 6,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },
    { id: 7,libelle: 'Introduction à l algorithmique', code: "vv",coefficient: 3, credit: 8, cm: 24, td: 36, tp: 24, tpe: 48,  semestre: 'Semestre 1', departement: 'Informatique', professeur: 'Moussa Dia', note: 80, cycle: 'Licence', niveau: 2,  filiere: "mathematique" },

  ])

  const updateCoursData = (newData) => {
    // Implémentez la logique pour mettre à jour les données de cours
    setCoursData(newData);
  };

  return (
    <CoursContext.Provider value={{ coursData, updateCoursData }}>
      {children}
    </CoursContext.Provider>
  );
};

export { CoursProvider, CoursContext };
