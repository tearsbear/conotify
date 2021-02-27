import { IonContent, IonPage} from '@ionic/react';
import LoginComponent from '../components/Login/Login';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark" fullscreen>
        <LoginComponent />
      </IonContent>
    </IonPage>
  );
};

export default Login;
