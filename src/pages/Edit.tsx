import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import EditComponent from '../components/Edit/Edit';

const Edit: React.FC = () => {
  return (
    <IonPage color="dark">
    <IonHeader color="dark">
    <IonToolbar color="dark">
      <IonButtons>
        <IonButton color="success" routerLink="/home" routerDirection="back">Back</IonButton>
      </IonButtons>
      <IonTitle color="success">Edit</IonTitle>
    </IonToolbar>
    </IonHeader>
      <IonContent fullscreen>
        <EditComponent />
      </IonContent>
    </IonPage>
  );
};

export default Edit;
