import {
   IonPage,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
} from '@ionic/react';
import React from 'react';

export const AllGoals: React.FC<{}> = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>All Goals</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <h2>This works - All goals page!</h2>
         </IonContent>
      </IonPage>
   );
};
