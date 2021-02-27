import React, { useState } from 'react';
import { IonText, IonButton, IonCard, IonCardContent, IonIcon, IonAlert } from '@ionic/react';
import './Home.css';
import { homeOutline, statsChartOutline, personOutline, mapOutline } from 'ionicons/icons';

const HomeComponent: React.FC = () => {
   const [showAlert2, setShowAlert2] = useState(false);

  return (
     <>
   <IonText color="success">
        <h1 className="titleApp">
         <img src="/assets/logo-green.png" width="25" alt=""/> Conotify</h1>
    </IonText>
   <img src="/assets/illust1.png" width="200" alt=""/>
   <IonCard className="headerCard" color="success">
   <IonCardContent>
      <IonText color="light">
         <h3 className="headerText">Are you or anyone you know feeling sick?</h3>
         <p className="descText">if you or anyone you know feeling sick with any of covid-19 symptoms please report it to us.</p>
      </IonText>
      <IonButton className="reportBtn" color="light" routerLink="/report">Report</IonButton>

   </IonCardContent>
   </IonCard>

   <IonText color="success">
      <h3 className="headerReport">My Reported List</h3>
   </IonText>

   <IonCard className="headerCard" color="success">
   <IonCardContent>
      <IonText color="light">
         <h3 className="headerText">John Doe</h3>
         <p>18, Male</p>
      </IonText>
      <IonText color="light">
      <p className="locationText"><IonIcon icon={mapOutline} /> Jakarta, Indonesia</p>
      </IonText>
      <div className="cardBtn"> 
      <IonButton className="listBtn" color="transparent" routerLink="/edit">Edit</IonButton>
      <IonButton className="listBtn" color="transparent" onClick={() => setShowAlert2(true)}>Delete</IonButton>
      </div>
   </IonCardContent>
   </IonCard>

   <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Confirm'}
          message={'delete this report?'}
          buttons={['Cancel', 'Delete']}
        />
   <br/>
   <br/>
   <br/>
   <br/>

   <IonCard className="cardNav">
      <IonCardContent className="cardNavContent">
         <IonButton className="btnTab" fill="clear">
         <IonIcon className="iconTab" icon={homeOutline} />
         </IonButton>
         <IonButton className="btnTab" fill="clear" routerLink="/case">
         <IonIcon className="iconTab" icon={statsChartOutline} />
         </IonButton>
         <IonButton className="btnTab" fill="clear" routerLink="/profile">
         <IonIcon className="iconTab" icon={personOutline} />
         </IonButton>
      </IonCardContent>
   </IonCard>
     </>
  );
};

export default HomeComponent;
