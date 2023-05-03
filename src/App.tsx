import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Footer from './components/Footer';
// import MenuHeader from './components/MenuHeader';
import Header from './components/Header';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Teams from './pages/Teams';
import Addteam from './pages/addteam';

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

const App: React.FC = () => (
  <IonApp>
    <Header />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home"><Home /></Route>
        <Route path="/signin"><Signin /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/teams"><Teams /></Route>
        <Route path="/team/:id"><Team /></Route>
        <Route path="/addteam"><Addteam /></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    <Footer />
  </IonApp>
);

export default App;
