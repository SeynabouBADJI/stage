import React, { useContext } from 'react';
import { Button, Stack } from '@mui/material';
import "../../styles/Cours.css";
import { CoursContext } from '../Context/CoursContext';
import AjouterCours from './AjouterCours';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function Cours() {
  const { coursData, updateCoursData } = useContext(CoursContext);

  // const [nouveauCours, setNouveauCours] = useState([]);

 
  const ajouterCours = (nouveauCours) => {
    const updatedCoursData = [...coursData, nouveauCours];
    updateCoursData(updatedCoursData);

  }

  const modifierCours = (id) => {
    console.log("Modifier le cours avec l'ID :", id);
  };

  const supprimerCours = (id) => {
    console.log("Supprimer le cours avec l'ID :", id);
  };


  return (
    <div className="container">
      <div className="liste-cours">
        {/* <h2>Liste des Cours </h2> */}
        <div className='ajout'>
          <Stack mt={2}>
            <AjouterCours ajouterCours={ajouterCours} />
          </Stack> <br/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Libellé</th>
              <th>Code</th>
              <th>Coeffiecient</th>
              <th>credit</th>
              <th>cm</th>
              <th>td</th>
              <th>tp</th>
              <th>tpe</th>
              <th>semestre</th>
              <th>Département</th>
              <th>Professeur</th>
              <th>Note</th>
              <th>Cycle</th>
              <th>Niveau</th>
              <th>modifier</th>
              <th>supprimer</th>


            </tr>
          </thead>
          <tbody>
            {coursData.map((cours) => (
              <tr key={cours.id}>
                <td>{cours.libelle}</td>
                <td>{cours.code}</td>
                <td>{cours.coefficient}</td>
                <td>{cours.credit}</td>
                <td>{cours.cm}</td>
                <td>{cours.td}</td>
                <td>{cours.tp}</td>
                <td>{cours.tpe}</td>
                <td>{cours.semestre}</td>
                <td>{cours.departement}</td>
                <td>{cours.professeur}</td>
                <td>{cours.note}</td>
                <td>{cours.cycle}</td>
                <td>{cours.niveau}</td>
                <td>
                  <IconButton onClick={() => modifierCours(cours.id)}>
                    <EditIcon style={{ color: 'blue' }}/>
                  </IconButton>
                  
                </td>
                <td>
                <IconButton onClick={() => supprimerCours(cours.id)}>
                  <DeleteIcon color='error'/>

                </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cours;
