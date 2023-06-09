import React from 'react';
import { IonContent, IonButton, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon} from '@ionic/react';
import { menu } from 'ionicons/icons';
import './MenuHeader.css';

interface SignInProps {
  signedIn: boolean;
}

const MenuHeader: React.FC<SignInProps> = ({ signedIn }) => {

  return (
    <>

       <IonHeader >
        <IonToolbar class='header'>
          <IonTitle ><h1><strong>TEAMFINDER</strong></h1></IonTitle>
        </IonToolbar>
      </IonHeader>

  <IonContent className="ion-padding"> 
    <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>      
      <IonFabButton class="menu-icon">
        <IonIcon icon={menu}></IonIcon>
      </IonFabButton>
      <IonFabList side="bottom">
        <IonFabButton routerLink="/home">
              <IonButton>home</IonButton>
        </IonFabButton>
        <IonFabButton routerLink="/signin">
               <IonButton>sign in</IonButton>
        </IonFabButton>
        <IonFabButton routerLink="/signup">
              <IonButton>sign up</IonButton>
        </IonFabButton>
        <IonFabButton routerLink="/teams">
              <IonButton>teams</IonButton>
        </IonFabButton>
        {signedIn && <IonFabButton routerLink="/addteam">
              <IonButton>add team</IonButton>
        </IonFabButton>}
      </IonFabList>
    </IonFab>
  </IonContent>
  </>
  );
};

export default MenuHeader; 