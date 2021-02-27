import React, { useState } from 'react';
import { IonText, IonInput, IonCard, IonCardContent, IonButton } from '@ionic/react';
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/covid.json'
import './Login.css';

const LoginComponent: React.FC = () => {
  const [text, setText] = useState<string>();

  const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  };

  return (
    <>  
    <IonCard className="iconCard">
    <IonCardContent>
    <Lottie options={defaultOptions}
              height={250}
              width={250}
              />
    </IonCardContent>
    </IonCard>
    <IonText className="ion-text-center" color="success">
        <h1 className="title">Conotify</h1>
        <p className="desc">Easily report People <br></br> that affected by Covid-19</p>
    </IonText>
    <IonCard className="inputCard">
        <IonCardContent className="inputCardContent">
            <IonInput className="userInput" type="tel" value={text} placeholder="phone number" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonCardContent>
    </IonCard>

    <IonButton className="inputSubmit" color="success" expand="block" routerLink="/home">Login</IonButton>
    </>
  );
};

export default LoginComponent;