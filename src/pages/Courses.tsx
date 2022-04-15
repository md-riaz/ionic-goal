import React from 'react';
import {
   IonButton,
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';

export const Courses: React.FC<{}> = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Courses</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <h2>this works - courses page</h2>
            <div>
               <IonButton routerLink='/course-goals'>To Course Goals</IonButton>
            </div>
         </IonContent>
      </IonPage>
   );
};
