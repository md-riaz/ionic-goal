import {
   IonModal,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonButton,
   IonCol,
   IonGrid,
   IonRow,
   IonInput,
   IonItem,
   IonLabel,
} from '@ionic/react';
import React from 'react';

export const EditModal: React.FC<{
   show: boolean;
   onCancel: () => void;
   editedGoal: { id: string; text: string } | null;
}> = ({ show, onCancel, editedGoal }) => {
   return (
      <IonModal isOpen={show}>
         <IonHeader>
            <IonToolbar>
               <IonTitle>{editedGoal ? 'Edit' : 'Add'} Goal</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <IonGrid>
               <IonRow>
                  <IonCol>
                     <IonItem>
                        <IonLabel position='floating'>Your Goal</IonLabel>
                        <IonInput type='text' value={editedGoal?.text} />
                     </IonItem>
                  </IonCol>
               </IonRow>
               <IonRow className='ion-text-center'>
                  <IonCol>
                     <IonButton color='medium' fill='clear' onClick={onCancel}>
                        Cancel
                     </IonButton>
                  </IonCol>

                  <IonCol>
                     <IonButton
                        color='secondary'
                        expand='block'
                        onClick={() => {
                           console.log();
                        }}
                     >
                        Save
                     </IonButton>
                  </IonCol>
               </IonRow>
            </IonGrid>
         </IonContent>
      </IonModal>
   );
};
