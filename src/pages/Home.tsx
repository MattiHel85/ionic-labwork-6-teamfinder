import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonCard className="welcome-container">
        <IonCardHeader>
          <IonCardTitle className="welcome-container-h1">WELCOME</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="welcome-container-p">
           Teamfinder is your go-to source for all things football!
        </IonCardContent>
      </IonCard>
      <IonCard className="contact-us-container">
        <IonCardHeader>
          <IonCardTitle className="contact-us-container-h1">CONTACT US</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="contact-us-container-p">
          Don't hesitate to get in touch if you have any queries or requests.<br /><br />
          Email: team@teamfinder.fi
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Home;
