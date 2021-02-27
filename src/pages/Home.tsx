import { IonContent, IonPage} from '@ionic/react';
import HomeComponent from '../components/Home/Home';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark" fullscreen>
        <HomeComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
