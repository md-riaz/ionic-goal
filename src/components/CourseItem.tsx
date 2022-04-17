import {
   IonCard,
   IonCardHeader,
   IonCardTitle,
   IonCardSubtitle,
   IonCardContent,
   IonButton,
} from '@ionic/react';
import React from 'react';

export const CourseItem: React.FC<{
   title: string;
   enrolmentDate: Date;
   id: string;
}> = ({ title, enrolmentDate, id }) => {
   return (
      <IonCard>
         <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
            <IonCardSubtitle>
               Enrolled on{' '}
               {enrolmentDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
               })}
            </IonCardSubtitle>
         </IonCardHeader>
         <IonCardContent>
            <div className='ion-text-right'>
               <IonButton
                  fill='clear'
                  color='secondary'
                  routerLink={`/courses/${id}`}
               >
                  View Course Goals
               </IonButton>
            </div>
         </IonCardContent>
      </IonCard>
   );
};
