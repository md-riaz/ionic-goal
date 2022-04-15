import {
   IonButton,
   IonCol,
   IonContent,
   IonGrid,
   IonHeader,
   IonInput,
   IonItem,
   IonLabel,
   IonModal,
   IonRow,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import React from 'react';

export const AddCourseModal: React.FC<{
   show: boolean;
   onCancel: () => void;
}> = ({ show, onCancel }) => {
   return (
      <IonModal isOpen={show}>
         <IonHeader>
            <IonHeader>
               <IonToolbar>
                  <IonTitle>Add Course</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent>
               <IonGrid>
                  <IonRow>
                     <IonCol>
                        <IonItem>
                           <IonLabel position='floating'>Course Title</IonLabel>
                           <IonInput type='text' />
                        </IonItem>
                     </IonCol>
                  </IonRow>
                  <IonRow className='ion-text-center'>
                     <IonCol>
                        <IonButton color='dark' fill='clear' onClick={onCancel}>
                           Cancel
                        </IonButton>
                     </IonCol>
                     <IonCol>
                        <IonButton color='secondary'>Save</IonButton>
                     </IonCol>
                  </IonRow>
               </IonGrid>
            </IonContent>
         </IonHeader>
      </IonModal>
   );
};
