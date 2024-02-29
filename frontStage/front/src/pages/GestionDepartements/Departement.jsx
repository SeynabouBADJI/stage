import React, { useState, useContext } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import "../../styles/UFR.css";
import AjouterDepartement from './AjouterDepartement';
import { DepartementContext } from '../Context/DepartementContext';
import "../../styles/Departement.css"

function Departement() {
  const { DepartementData, updateDepartementData } = useContext(DepartementContext);

  const [nouveauDepartement, setNouveauDepartement] = useState([]);

  const ajouterDepartement = (nouveauDepartement) => {
    const updatedDepartementData = [...DepartementData, nouveauDepartement];
    updateDepartementData(updatedDepartementData);
  };

  const modifierDepartement= (id) => {
    // Logique pour modifier l'UFR avec l'ID spécifié
    console.log("Modifier l'UFR avec l'ID :", id);
  };

  const supprimerDepartement= (id) => {
    // Logique pour supprimer l'UFR avec l'ID spécifié
    console.log("Supprimer l'UFR avec l'ID :", id);
  };


  return (
    <div className="container">
      <div className="liste-Departement">
        {/* <h2>Liste des Departement </h2> */}
        <Stack>
          <AjouterDepartement ajouterDepartement={ajouterDepartement} />
        </Stack><br/>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {DepartementData.map((Departement) => (
              <tr key={Departement.id}>
                <td>{Departement.nom}</td>
                <td>
                  <Button onClick={() => modifierDepartement(Departement.id)}>
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button onClick={() => supprimerDepartement(Departement.id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Departement;
