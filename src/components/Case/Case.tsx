import { IonText, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import './Case.css';

const CaseComponent: React.FC = () => {
  return (
    <>  
    <div color="success" className="totalCase">
    <br/>
    <IonText className="ion-text-center" color="dark">
        <h1 className="title">1350</h1>
        <h3 className="desc">total case</h3>
    </IonText>
    <br/>
    </div>
    <IonCard color="warning">
     <IonCardContent>
        <p>Affected</p>
        <h1>1500 people affected</h1>
     </IonCardContent>
    </IonCard>
    <IonCard color="danger">
     <IonCardContent>
        <p>Death</p>
        <h1>450 people death</h1>
     </IonCardContent>
    </IonCard>
    <IonCard color="success">
     <IonCardContent>
        <p>Recovered</p>
        <h1>450 people recovered</h1>
     </IonCardContent>
    </IonCard>
    <IonCard color="primary">
     <IonCardContent>
        <p>active</p>
        <h1>450 active case</h1>
     </IonCardContent>
    </IonCard>
    </>
  );
};

export default CaseComponent;