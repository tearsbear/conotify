import React, { useState } from 'react';
import { IonImg, IonText, IonInput, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { person } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <>  
    <IonImg className="images" src="assets/logo.png"/>
    <IonText className="ion-text-center">
        <h1 className="title">Conotify</h1>
        <p className="desc">report people that affected by pandemic.</p>
    </IonText>
    <IonCard className="inputCard">
        <IonCardContent className="inputCardContent">
            <IonInput className="userInput" type="number" value={text} placeholder="phone number" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonCardContent>
    </IonCard>

    <IonButton className="inputSubmit" color="dark" expand="block">Login</IonButton>
    </>
  );
};

export default Login;