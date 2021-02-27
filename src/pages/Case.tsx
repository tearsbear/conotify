import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import CaseComponent from '../components/Case/Case';

const Case: React.FC = () => {
  return (
    <IonPage color="dark">
    <IonHeader color="success">
    <IonToolbar color="success">
      <IonButtons>
        <IonButton color="dark" routerLink="/home" routerDirection="back">Back</IonButton>
      </IonButtons>
      <IonTitle color="dark">Statistics</IonTitle>
    </IonToolbar>
    </IonHeader>
      <IonContent color="dark" fullscreen>
        <CaseComponent />
      </IonContent>
    </IonPage>
  );
};

export default Case;
