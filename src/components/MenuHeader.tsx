import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon, IonLabel } from '@ionic/react';
import { add, colorPalette, document, globe } from 'ionicons/icons';
import './MenuHeader.css';

interface ContainerProps { }

const MenuHeader: React.FC<ContainerProps> = () => {
  return (
    <>
       <IonHeader>
        <IonToolbar>
          <IonTitle class='header'><h1><strong>TEAMFINDER</strong></h1></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding"> 

        <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
      <IonFabButton >
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="bottom">
        <IonFabButton>
          <IonIcon icon={document}></IonIcon>
          <IonLabel>Sign in</IonLabel>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={colorPalette}></IonIcon>
          <IonLabel>Sign in</IonLabel>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={globe}></IonIcon>
          <IonLabel>Sign in</IonLabel>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={globe}></IonIcon>
          <IonLabel>Sign in</IonLabel>
        </IonFabButton>
      </IonFabList>
    </IonFab>

      </IonContent>
  </>
  );
};

export default MenuHeader; 