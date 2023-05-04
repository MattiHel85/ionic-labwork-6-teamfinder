import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon, IonLabel } from '@ionic/react';
import { menu } from 'ionicons/icons';
import './MenuHeader.css';

import { useState } from 'react';

interface ContainerProps { }

const MenuHeader: React.FC<ContainerProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>

       <IonHeader>
        <IonToolbar>
          <IonTitle class='header'><h1><strong>TEAMFINDER</strong></h1></IonTitle>
        </IonToolbar>
      </IonHeader>

  <IonContent className="ion-fab-content"> 
    <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>      
      <IonFabButton>
        <IonIcon icon={menu}></IonIcon>
      </IonFabButton>
      <IonFabList side="bottom">
        <IonFabButton routerLink="/home">
              <IonLabel>home</IonLabel>
        </IonFabButton>
        <IonFabButton routerLink="/signin">
               <IonLabel>sign in</IonLabel>
        </IonFabButton>
        <IonFabButton routerLink="/signup">
              <IonLabel>sign up</IonLabel>
        </IonFabButton>
        <IonFabButton routerLink="/showteams">
              <IonLabel>show teams</IonLabel>
        </IonFabButton>
        {!isLoggedIn && <IonFabButton routerLink="/addteam">
              <IonLabel>add team</IonLabel>
        </IonFabButton>}
      </IonFabList>
    </IonFab>
  </IonContent>
  </>
  );
};

export default MenuHeader; 