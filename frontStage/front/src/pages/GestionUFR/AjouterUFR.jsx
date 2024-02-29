import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

function AjouterUFR(props) {
  const [open, setOpen] = useState(false);

  const initialUFRState = {
    Nom: '',
    
  };

  const [nouveauUFR, setNouveauUFR] = useState(initialUFRState);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNouveauUFR({ ...nouveauUFR, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    props.ajouterUFR(nouveauUFR);
    // Réinitialiser l'état après la sauvegarde
    setNouveauUFR(initialUFRState);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>Ajouter UFR</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter UFR</DialogTitle>
        <DialogContent>
            <TextField
              label="Nom"
              name="nom"
              autoFocus
              value={nouveauUFR.nom}
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

export default AjouterUFR;
