import React, { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonSelectOption, IonSelect, IonDatetime, IonText, IonThumbnail, IonNote, IonRange, IonItemDivider, IonListHeader } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';

const picture_paris = <img src="assets/pariis.jpg" alt="Pariis"   />;
const picture_rome = <img src="assets/rooma.webp" alt="Rooma" /> ;
const images = [ picture_paris, picture_rome]


const customActionSheetOptions = {
  header: 'Linn',
  subHeader: 'Vali linn'
};



  

export const Tab3: React.FC = () => {
 
  const [linn, valiLinn] = useState<string>();
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Galerii</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen><IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="galerii" size="large">Linnad</IonTitle>
          </IonToolbar>
        </IonHeader>
       

      <IonList>
          

               <IonCard>  
                 <IonCardContent> 

          <IonItem>
            <IonLabel className= "sinulinn">Sinu linn</IonLabel>
            <IonSelect
              interfaceOptions={customActionSheetOptions}
              interface="action-sheet"
              placeholder="Vali üks"
              onIonChange={e => valiLinn(e.detail.value)}
              value={linn}
            >
              <IonSelectOption value="Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine.

              Paris occupies a central position in the rich agricultural region known as the Paris Basin, and it constitutes one of eight départements of the Île-de-France administrative region. It is by far the country’s most important centre of commerce and culture. Area city, 41 square miles (105 square km); metropolitan area, 890 square miles (2,300 square km). Pop. (2012) city, 2,265,886; (2015 est.) urban agglomeration, 10,858,000.">Pariis
              </IonSelectOption>
              <IonSelectOption value="Rome, Italian Roma, historic city and capital of Roma provincia (province), of Lazio regione (region), and of the country of Italy. Rome is located in the central portion of the Italian peninsula, on the Tiber River about 15 miles (24 km) inland from the Tyrrhenian Sea. Once the capital of an ancient republic and empire whose armies and polity defined the Western world in antiquity and left seemingly indelible imprints thereafter, the spiritual and physical seat of the Roman Catholic Church, and the site of major pinnacles of artistic and intellectual achievement, Rome is the Eternal City, remaining today a political capital, a religious centre, and a memorial to the creative imagination of the past. Area city, 496 square miles (1,285 square km); province, 2,066 square miles (5,352 square km). Pop. (2011) city, 2,617,175; province, 3,997,465; (2007 est.) urban agglom., 3,339,000; (2016 est.) city, 2,873,494; province, 4,353,738.">Rooma
              </IonSelectOption>
              <IonSelectOption value="yAbu Dhabi, Arabic Abū Ẓaby, city and capital of Abu Dhabi emirate, one of the United Arab Emirates (formerly Trucial States, or Trucial Oman), and the national capital of that federation. The city occupies most of a small triangular island of the same name, just off the Persian Gulf coast and connected to the mainland by a short bridge. Abu Dhabi was formerly an undeveloped town of only local importance, but the emirate’s oil revenues enabled it to evolve into a modern city with a fully developed infrastructure.">Abudhabi
              </IonSelectOption>
              
              
            </IonSelect>
          </IonItem>
          </IonCardContent> 
          </IonCard> 
          


          
          <IonCard>
            <IonCardContent>
          <IonItem className="Telst" >Linn: {linn ?? '(valimata)'}</IonItem>
          </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;