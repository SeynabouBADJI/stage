import React, { useState } from 'react';
import "../../styles/Contrat.css";

function Contrat() {
  const [contrats, setContrats] = useState([
    { id: 1, enseignant: 'John Doe', statut: 'Signé', dateDebut: '01/01/2022', dateFin: '31/12/2022' },
    { id: 2, enseignant: 'Jane Doe', statut: 'En attente', dateDebut: '01/02/2022', dateFin: '30/06/2022' },
    // Ajoutez d'autres contrats au besoin
  ]);

  const [contratAModifier, setContratAModifier] = useState(null);

  const handleModifierClick = (contrat) => {
    setContratAModifier(contrat);
    // Ajoutez ici la logique pour ouvrir une boîte de dialogue, un formulaire de modification, etc.
    // Exemple : Ouverture d'une boîte de dialogue de modification
    // openModal();
  };

  return (
    <div className="container">
      <div className="liste-contrats">
        <h2>Liste des Contrats :</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Enseignant</th>
              <th>Statut</th>
              <th>Date de Début</th>
              <th>Date de Fin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contrats.map((contrat) => (
              <tr key={contrat.id}>
                <td>{contrat.id}</td>
                <td>{contrat.enseignant}</td>
                <td>{contrat.statut}</td>
                <td>{contrat.dateDebut}</td>
                <td>{contrat.dateFin}</td>
                <td>
                  <button onClick={() => handleModifierClick(contrat)}>Modifier</button>
                  {/* Ajoutez le bouton Supprimer avec la logique de suppression si nécessaire */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Ajoutez ici des formulaires ou d'autres composants pour l'ajout, la modification, etc. */}
    </div>
  );
}

export default Contrat;
