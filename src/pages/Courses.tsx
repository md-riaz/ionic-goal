import React, { useState } from 'react';
import {
   IonButton,
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonCol,
   IonContent,
   IonFab,
   IonFabButton,
   IonGrid,
   IonHeader,
   IonIcon,
   IonPage,
   IonRow,
   IonTitle,
   IonToolbar,
   isPlatform,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { AddCourseModal } from '../components/AddCourseModal';

export const COURSE_DATA = [
   {
      id: 'c1',
      title: 'Ionic + React - The Practical Guide',
      enrolled: new Date('04/22/2019'),
      goals: [
         {
            id: 'c1g1',
            text: 'Finish the course!',
         },
         {
            id: 'c1g2',
            text: 'Learn a lot!',
         },
      ],
   },
   {
      id: 'c2',
      title: 'React.js - The Complete Guide',
      enrolled: new Date('08/22/2019'),
      goals: [
         {
            id: 'c2g1',
            text: 'Finish the course!',
         },
         {
            id: 'c2g2',
            text: 'Learn a lot!',
         },
      ],
   },
   {
      id: 'c3',
      title: 'Vue.js - The Complete Guide',
      enrolled: new Date('03/22/2019'),
      goals: [
         {
            id: 'c3g1',
            text: 'Finish the course!',
         },
         {
            id: 'c3g2',
            text: 'Learn a lot!',
         },
      ],
   },
];

export const Courses: React.FC<{}> = () => {
   const [isAdding, setIsAdding] = useState(false);

   const startAddCourseHandler = () => {
      setIsAdding(true);
   };

   const cancelAddCourseHandler = () => {
      setIsAdding(false);
   };

   return (
      <React.Fragment>
         <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} />

         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonTitle>Courses</IonTitle>
                  {!isPlatform('android') && (
                     <IonButtons slot='end'>
                        <IonButton onClick={startAddCourseHandler}>
                           <IonIcon slot='icon-only' icon={addOutline} />
                        </IonButton>
                     </IonButtons>
                  )}
               </IonToolbar>
            </IonHeader>
            <IonContent>
               <IonGrid>
                  {COURSE_DATA.map((course) => (
                     <IonRow key={course.id}>
                        <IonCol size-md='4' offset-md='4'>
                           <IonCard>
                              <IonCardHeader>
                                 <IonCardTitle>{course.title}</IonCardTitle>
                                 <IonCardSubtitle>
                                    Enrolled on{' '}
                                    {course.enrolled.toLocaleDateString(
                                       'en-US',
                                       {
                                          year: 'numeric',
                                          month: '2-digit',
                                          day: '2-digit',
                                       }
                                    )}
                                 </IonCardSubtitle>
                              </IonCardHeader>
                              <IonCardContent>
                                 <div className='ion-text-right'>
                                    <IonButton
                                       fill='clear'
                                       color='secondary'
                                       routerLink={`/courses/${course.id}`}
                                    >
                                       View Course Goals
                                    </IonButton>
                                 </div>
                              </IonCardContent>
                           </IonCard>
                        </IonCol>
                     </IonRow>
                  ))}
               </IonGrid>
               {isPlatform('android') && (
                  <IonFab horizontal='end' vertical='bottom' slot='fixed'>
                     <IonFabButton
                        color='secondary'
                        onClick={startAddCourseHandler}
                     >
                        <IonIcon icon={addOutline} />
                     </IonFabButton>
                  </IonFab>
               )}
            </IonContent>
         </IonPage>
      </React.Fragment>
   );
};
