import { IonButton, IonContent, IonHeader, IonCard, IonPage, IonText, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const test1 = ["Pariis", "Rooma", "Abudhabi"];
// const test2 = ["Toompea"]





const Tab1: React.FC = () => {

  
  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title" >Reisi asukohad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="ion-text-center">Sihtpunktid</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      <IonText color="secondary" class="ion-text-justify"  >
        
    
    <div className="ion-padding">

      <h1>Asukohad kuhu võiks reisida, vali enda järgmine reisi sihtpunkt 
        
      </h1>
    </div>

    <div className="ion-padding2">

    <h2>Selleks vajuta siia</h2>
    
    </div>

      </IonText>

      

    <div className="vajuta-siia">
      
      <IonButton onClick={() => console.log(test1) } id= "button" className="nupp" size="large" slot= "primary" color="secondary">
      <h1>Kuhu</h1>
      
      </IonButton>

      </div>

      <IonCard className="ion-card">
          <IonCardHeader>
            
            <IonCardTitle id="asukoht">Pariis</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id="sisu">
            
          Pariis (prantsuse keeles Paris) on Prantsusmaa pealinn ja Île-de-France'i piirkonna halduskeskus ning Prantsusmaa ainus vald-departemang.
      </IonCardContent>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
