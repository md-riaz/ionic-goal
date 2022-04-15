import {
   IonButtons,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import React from 'react';

export const Filter: React.FC<{}> = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot='start'>
                  <IonMenuButton />
               </IonButtons>
               <IonTitle>Filter</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <h2>This works - Filter page!</h2>
         </IonContent>
      </IonPage>
   );
};
