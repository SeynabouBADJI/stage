import React, { useState } from 'react';
import "../../styles/Enseignant.css";
import { DataGrid } from "@mui/x-data-grid";

function Enseignant() {
  const [enseignants, setEnseignants] = useState([
    { id: 1, nom: 'John Doe', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 2, nom: 'baba Ndiaye', departement: 'Mathematique', email: 'jane.doe@example.com' },
    { id: 3, nom: 'Boubacar Ba', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 4, nom: 'Aminata Ndiaye', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 5, nom: 'Moussa Toure', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 6, nom: 'Abdou Drame', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 7, nom: 'Fatimata Diallo', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 8, nom: 'Idrissa Badji', departement: 'Informatique', email: 'john.doe@example.com' },
    { id: 9, nom: 'Binetou Badji', departement: 'Informatique', email: 'john.doe@example.com' },

    // Ajoutez d'autres enseignants au besoin
  ]);

  const [enseignantAModifier, setEnseignantAModifier] = useState(null);
  const handleModifierClick = (enseignant) => {
    setEnseignantAModifier(enseignant);
    // Ajoutez ici la logique pour ouvrir une boîte de dialogue, un formulaire de modification, etc.
    // Exemple : Ouverture d'une boîte de dialogue de modification
    // openModal();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Nom', width: 150 },
    { field: 'departement', headerName: 'Département', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleModifierClick(params.row)}>Modifier</button>
          {/* Ajoutez le bouton Supprimer avec la logique de suppression si nécessaire */}
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="liste-enseignants">
        <h2>Liste des Enseignants :</h2>
        <DataGrid
          rows={enseignants}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Enseignant;
