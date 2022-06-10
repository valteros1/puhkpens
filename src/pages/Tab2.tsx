import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Galerii</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="galerii" size="large">Galerii</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonCard className="ion-card">
          <IonCardHeader>
            
            <IonCardTitle id="asukoht">Pariis</IonCardTitle>
          </IonCardHeader>


          <IonCardContent id="sisu">
           <img src="assets/pariis.jpg" alt="Pariis" /> 
          Pariis (prantsuse keeles Paris) on Prantsusmaa pealinn ja Île-de-France'i piirkonna halduskeskus ning Prantsusmaa ainus vald-departemang.
      </IonCardContent>
        </IonCard>
        <IonCard className="ion-card">
          <IonCardHeader>
            
            <IonCardTitle id="asukoht">Rooma</IonCardTitle>
          </IonCardHeader>


          <IonCardContent id="sisu">
           <img src="assets/rooma.webp" alt="Rooma" /> 
           Rooma on kunsti- ja arhitektuurimälestiste poolest maailma rikkamaid linnu ja justkui suur vabaõhumuuseum: Michelangelo kujundatud väljakud, Raphaeli ja Caravaggio meistriteosed kirikutes, Bernini purskkaevud ja suurejoonelised vaated antiikse Rooma varemetele.
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
