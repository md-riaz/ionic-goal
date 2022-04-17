import {
   IonItemSliding,
   IonItemOptions,
   IonItemOption,
   IonIcon,
   IonItem,
   IonLabel,
} from '@ionic/react';
import { trash, create } from 'ionicons/icons';
import React from 'react';

export const EditableGoalItem: React.FC<{
   slidingRef: React.Ref<HTMLIonItemSlidingElement>;
   onStartDelete: () => void;
   onStartEdit: (event: React.MouseEvent) => void;
   text: string;
}> = ({ slidingRef, onStartDelete, onStartEdit, text }) => {
   return (
      <IonItemSliding ref={slidingRef}>
         <IonItemOptions side='start' onClick={onStartDelete}>
            <IonItemOption color='danger'>
               <IonIcon icon={trash} slot='icon-only' />
            </IonItemOption>
         </IonItemOptions>

         <IonItem lines='full'>
            <IonLabel>{text}</IonLabel>
         </IonItem>

         <IonItemOptions side='end' onClick={onStartEdit}>
            <IonItemOption>
               <IonIcon icon={create} slot='icon-only' />
            </IonItemOption>
         </IonItemOptions>
      </IonItemSliding>
   );
};
