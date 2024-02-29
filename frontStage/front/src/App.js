import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Cours from './pages/GestionCours/Cours';
import Departement from './pages/GestionDepartements/Departement';
import UFR from './pages/GestionUFR/UFR';
import Enseignant from './pages/GestionEnseignants/Enseignant';
import Contrat from './pages/GestionContrats/Contrat';
import { CoursProvider } from './pages/Context/CoursContext';
import { UFRProvider } from './pages/Context/UFRContext';
import { DepartementProvider } from './pages/Context/DepartementContext';
import { AppBar,Toolbar, Typography ,ThemeProvider} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import theme from './theme';
import './App.css';

 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UFRProvider>
      <DepartementProvider>
        <CoursProvider>
        <div className="App">
        <AppBar position="static">
            <Toolbar >
              <img src='./images/logo.jpg' className='logo'/>
              <MenuBookIcon  style={{ marginLeft: '20px' }}  /><br/>
              <Typography variant="h4" className='ty'> Gestion Des Cours Hybrides ! </Typography>
            </Toolbar>
          </AppBar>
          <Router>
            <Switch>
              <Route path='/' exact component={Accueil}/>
              <Route path="/gestion-cours" component={Cours}/>
              <Route path="/gestion-departement" component={Departement} />
              <Route path="/gestion-ufr" component={UFR} />
              <Route path="/gestion-enseignants" component={Enseignant} />
              <Route path="/gestion-contrats" component={Contrat} /> 
            </Switch>
          </Router>
        </div>
      </CoursProvider>
    </DepartementProvider>
    </UFRProvider>
    </ThemeProvider>
    
    
  );
}

export default App;
