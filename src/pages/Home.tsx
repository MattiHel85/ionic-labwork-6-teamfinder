import { IonContent, IonPage, } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        
    <IonContent className="container">
      <div className="welcome-container">
        <h1>WELCOME</h1>
        <p>Teamfinder is your go-to source for all things football!</p>
      </div>
    </IonContent>

    <IonContent className="container">
      <div className="contact-us-container">
        <h1>CONTACT US</h1>
        <p>Don't hesitate to get in touch if you have any queries or requests.<br /><br />
        Email: team@teamfinder.fi</p>
      </div>
    </IonContent>

    </IonPage>
  );
};

export default Home;
