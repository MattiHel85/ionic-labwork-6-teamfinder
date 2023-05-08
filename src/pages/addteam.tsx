import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function AddTeam() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Add team</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
  );
}
export default AddTeam;