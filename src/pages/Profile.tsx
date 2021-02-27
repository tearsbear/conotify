import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import ProfileComponent from '../components/Profile/Profile';

const Profile: React.FC = () => {
  return (
    <IonPage color="dark">
    <IonHeader color="dark">
    <IonToolbar color="dark">
      <IonButtons>
        <IonButton color="success" routerLink="/home" routerDirection="back">Back</IonButton>
      </IonButtons>
      <IonTitle color="success">My Account</IonTitle>
    </IonToolbar>
    </IonHeader>
      <IonContent color="dark" fullscreen>
        <ProfileComponent />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
