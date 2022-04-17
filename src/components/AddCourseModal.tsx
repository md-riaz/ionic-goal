import {
   IonButton,
   IonCol,
   IonContent,
   IonDatetime,
   IonGrid,
   IonHeader,
   IonInput,
   IonItem,
   IonLabel,
   IonModal,
   IonRow,
   IonText,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import React, { useRef, useState } from 'react';

export const AddCourseModal: React.FC<{
   show: boolean;
   onCancel: () => void;
}> = ({ show, onCancel }) => {
   const titleRef = useRef<HTMLIonInputElement>(null);
   const dateRef = useRef<HTMLIonDatetimeElement>(null);

   const [error, setError] = useState('');

   const saveHandler = () => {
      const enteredTitle = titleRef.current!.value;
      const enteredDate = dateRef.current!.value;

      if (
         !enteredTitle ||
         !enteredDate ||
         enteredTitle.toString().trim().length === 0 ||
         enteredDate.trim().length === 0
      ) {
         setError('Please enter a valid title and select a valid date');
         return;
      }

      setError('');
   };

   return (
      <IonModal isOpen={show}>
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
                        <IonInput type='text' ref={titleRef} />
                     </IonItem>
                  </IonCol>
               </IonRow>
               <IonRow>
                  <IonCol>
                     <IonItem>
                        <IonDatetime
                           firstDayOfWeek={1}
                           locale='en-US'
                           presentation='date'
                           ref={dateRef}
                        >
                           <IonLabel slot='title'>Enrollment Date</IonLabel>
                        </IonDatetime>
                     </IonItem>
                  </IonCol>
               </IonRow>

               {error && (
                  <IonRow className='ion-text-center'>
                     <IonCol>
                        <IonText color='danger'>
                           <p>{error}</p>
                        </IonText>
                     </IonCol>
                  </IonRow>
               )}

               <IonRow className='ion-text-center'>
                  <IonCol>
                     <IonButton color='dark' fill='clear' onClick={onCancel}>
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
