import { IonText, IonButton } from '@ionic/react';
import './Profile.css';

const ProfileComponent: React.FC = () => {
  return (
    <>  
    <IonText className="ion-text-center" color="dark">
        <h1 className="title">Phone Number</h1>
        <h3 className="desc">08976203842</h3>
    </IonText>
    <IonButton className="inputSubmit" color="success" expand="block" routerLink="/">Logout</IonButton>
    </>
  );
};

export default ProfileComponent;