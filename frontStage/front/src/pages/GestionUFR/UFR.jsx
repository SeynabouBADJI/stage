import React, { useState, useContext } from 'react';
import { Button, Stack } from '@mui/material';
import "../../styles/UFR.css";
import { UFRContext } from '../Context/UFRContext';
import AjouterUFR from './AjouterUFR';
import { Link } from 'react-router-dom';


function UFR() {
  const { UFRData, updateUFRData } = useContext(UFRContext);

  const ajouterUFR = (nouveauUFR) => {
    const updatedUFRData = [...UFRData, nouveauUFR];
    updateUFRData(updatedUFRData);
  };

  const modifierUFR = (id) => {
    // Logique pour modifier l'UFR avec l'ID spécifié
    console.log("Modifier l'UFR avec l'ID :", id);
  };

  const supprimerUFR = (id) => {
    // Logique pour supprimer l'UFR avec l'ID spécifié
    console.log("Supprimer l'UFR avec l'ID :", id);
  };
  return (
    <div className="container">
      <div className="liste-UFR">
        {/* <h2>Liste des UFR </h2> */}
        <Stack>
          <AjouterUFR ajouterUFR={ajouterUFR} />
        </Stack><br/>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Modifier</th>
              <th>Supprimer</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {UFRData.map((UFR) => (
              <tr key={UFR.id}>
                <td>{UFR.nom}</td>
                <td>
                  <Button onClick={() => modifierUFR(UFR.id)}>
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button onClick={() => supprimerUFR(UFR.id)}>
                    Supprimer
                  </Button>
                </td>
                <td>
                <Link to={"/gestion-departement"}>
                  <Button>
                    Voir Departement
                  </Button>

                </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UFR;
