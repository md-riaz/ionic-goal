import {
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonPage,
   IonButtons,
   IonBackButton,
} from '@ionic/react';
import React from 'react';

export const CourseGoals: React.FC<{}> = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot='start'>
                  <IonBackButton defaultHref='/' />
               </IonButtons>
               <IonTitle>Course Goals</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <h2>this works - course goals page!</h2>
         </IonContent>
      </IonPage>
   );
};
