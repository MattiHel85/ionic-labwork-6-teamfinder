import { useState } from "react";
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Teams from './pages/Teams';
import Team from './pages/Team';
import AddTeam from './pages/AddTeam';
import EditTeam from './pages/EditTeam';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
  
  <IonApp>
    <MenuHeader signedIn={signedIn}/>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home"><Home /></Route>
        <Route path="/signin"><SignIn change={setSignedIn} signedIn={signedIn}/></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/teams"><Teams /></Route>
        <Route path="/team/:id"><Team signedIn={signedIn}/></Route>
        <Route path="/addteam"><AddTeam /></Route>
        <Route path="/edit/team/:id"><EditTeam /></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    <Footer />
  </IonApp>
)};

export default App;
