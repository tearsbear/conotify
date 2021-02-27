import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonInput, IonTextarea, IonSelect, IonSelectOption } from '@ionic/react';
import './Report.css';

const ReportComponent: React.FC = () => {
  const [text, setText] = useState<string>();
  const [gender, setGender] = useState<string>();
  return (
     <>
   <IonCard className="inputCard">
        <IonCardContent className="inputCardContent">
            <IonInput className="userInput" type="text" value={text} placeholder="Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonCardContent>
    </IonCard>
   <IonCard className="inputCards">
        <IonCardContent className="inputCardContent">
            <IonInput className="userInput" type="number" value={text} placeholder="Age" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonCardContent>
    </IonCard>
   <IonCard className="inputCards">
        <IonCardContent className="inputCardContent">
            <IonSelect className="userInput" value={gender} placeholder="Gender" onIonChange={e => setGender(e.detail.value)} interface="action-sheet">
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
        </IonCardContent>
   </IonCard>
   <IonCard className="inputCards">
        <IonCardContent className="inputCardContent">
            <IonTextarea placeholder="Location" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
        </IonCardContent>
    </IonCard>

    <IonButton className="inputSubmit" color="success" expand="block" routerLink="/home">Submit</IonButton>
     </>
  );
};

export default ReportComponent;
