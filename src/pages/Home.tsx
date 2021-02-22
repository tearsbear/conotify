import { IonContent, IonPage} from '@ionic/react';
import Login from '../components/Login/Login';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="success" fullscreen>
        <Login />
      </IonContent>
    </IonPage>
  );
};

export default Home;
