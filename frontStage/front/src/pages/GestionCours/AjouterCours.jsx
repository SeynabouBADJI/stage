import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import '../../styles/AjouterCours.css'

function AjouterCours(props) {
  const [open, setOpen] = useState(false);

  const initialCoursState = {
    libelle: '',
    code: '',
    coefficient: 0,
    credit: 0,
    cm: 0,
    td: 0,
    tp: 0,
    tpe: 0,
    semestre: '',
    departement: '',
    professeur: '',
    note: 0,
    cycle: '',
    niveau: 0,
  };

  const [nouveauCours, setNouveauCours] = useState(initialCoursState);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNouveauCours({ ...nouveauCours, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    props.ajouterCours(nouveauCours);
    // Réinitialiser l'état après la sauvegarde
    setNouveauCours(initialCoursState);
    handleClose();
  };

  return (
    <div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className="boutonVert"
        > 
        Ajouter Cours
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle >Ajouter Cours</DialogTitle>
        <DialogContent>
            <TextField
              label="Libellé"
              name="libelle"
              autoFocus
              value={nouveauCours.libelle}
              onChange={handleChange}
            /> <br/>

            <TextField
              label="code"
              name="code"
              value={nouveauCours.code}
              onChange={handleChange}
            /> <br/>

            <TextField
              label="coefficient"
              name="coefficient"
              value={nouveauCours.coefficient}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="credit"
              name="credit"
              value={nouveauCours.credit}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="cm"
              name="cm"
              value={nouveauCours.cm}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="td"
              name="td"
              value={nouveauCours.td}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="tp"
              name="tp"
              value={nouveauCours.tp}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="tpe"
              name="tpe"
              value={nouveauCours.tpe}
              onChange={handleChange}
              /> <br/>

            <TextField
              label="semestre"
              name="semestre"
              value={nouveauCours.semestre}
              onChange={handleChange}
            /> <br/>

            <TextField
              label="departement"
              name="departement"
              value={nouveauCours.departement}
              onChange={handleChange}
            /> <br/>

            <TextField
              label="professeur"
              name="professeur"
              value={nouveauCours.professeur}
              onChange={handleChange}
            /> <br/>

            
            <TextField
              label="note"
              name="note"
              value={nouveauCours.note}
              onChange={handleChange}
            /> <br/>
            
            <TextField
              label="cycle"
              name="cycle"
              value={nouveauCours.cycle}
              onChange={handleChange}
            /> <br/>
            
            <TextField
              label="niveau"
              name="niveau"
              value={nouveauCours.niveau}
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

export default AjouterCours;
