import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import ReportComponent from '../components/Report/Report';

const Report: React.FC = () => {
  return (
    <IonPage color="dark">
    <IonHeader color="dark">
    <IonToolbar color="dark">
      <IonButtons>
        <IonButton color="success" routerLink="/home" routerDirection="back">Back</IonButton>
      </IonButtons>
      <IonTitle color="success">Report</IonTitle>
    </IonToolbar>
    </IonHeader>
      <IonContent color="dark" fullscreen>
        <ReportComponent />
      </IonContent>
    </IonPage>
  );
};

export default Report;
