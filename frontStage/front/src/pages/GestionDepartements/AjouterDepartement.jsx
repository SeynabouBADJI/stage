import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

function AjouterDepartement(props) {
  const [open, setOpen] = useState(false);

  const initialDepartementState = {
    Nom: '',
    
  };

  const [nouveauDepartement, setNouveauDepartement] = useState(initialDepartementState);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNouveauDepartement({ ...nouveauDepartement, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    props.ajouterDepartement(nouveauDepartement);
    // Réinitialiser l'état après la sauvegarde
    setNouveauDepartement(initialDepartementState);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>Ajouter Departement</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Departement</DialogTitle>
        <DialogContent>
            <TextField
              label="Nom"
              name="nom"
              autoFocus
              value={nouveauDepartement.Nom}
              onChange={handleChange}
            /> <br/> 

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Sauvegarder</Button>
          <Button onClick={handleClose}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AjouterDepartement;

