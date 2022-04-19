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
   IonText,
} from '@ionic/react';
import React, { useRef, useState } from 'react';

export const EditModal: React.FC<{
   show: boolean;
   onCancel: () => void;
   onSave: (goalText: string) => void;
   editedGoal: { id: string; text: string } | null;
}> = ({ show, onCancel, onSave, editedGoal }) => {
   const textRef = useRef<HTMLIonInputElement>(null);

   const [error, setError] = useState('');

   const saveHandler = () => {
      const enteredText = textRef.current!.value;

      if (!enteredText || enteredText.toString().trim().length === 0) {
         setError('Please enter a valid text');
         return;
      }
      onSave(enteredText.toString());
   };

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
                        <IonInput
                           type='text'
                           value={editedGoal?.text}
                           ref={textRef}
                        />
                     </IonItem>
                  </IonCol>
               </IonRow>
               {error && (
                  <IonRow>
                     <IonCol>
                        <IonText color='danger'>
                           <p>{error}</p>
                        </IonText>
                     </IonCol>
                  </IonRow>
               )}
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
                        onClick={saveHandler}
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
