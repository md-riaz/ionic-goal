import {
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonPage,
   IonButtons,
   IonBackButton,
   IonList,
   IonItem,
   IonLabel,
   IonItemSliding,
   IonItemOptions,
   IonItemOption,
   IonIcon,
   IonButton,
   IonFab,
   IonFabButton,
   isPlatform,
   IonAlert,
} from '@ionic/react';
import { addOutline, create, trash } from 'ionicons/icons';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { COURSE_DATA } from './Courses';

export const CourseGoals: React.FC<{}> = () => {
   const [startedDeleting, setStartedDeleting] = useState(false);
   const { courseId } = useParams<{ courseId: string }>();
   const selectedCourse = COURSE_DATA.find((course) => course.id === courseId);

   const startDeleteGoalHandler = () => {
      setStartedDeleting(true);
   };

   const deleteGaolHandler = () => {
      setStartedDeleting(false);
   };

   const startAddGaolHandler = () => {
      console.log('Start adding goal');
   };

   const startEditGoalHandler = (event: React.MouseEvent) => {
      event.stopPropagation();
   };

   return (
      <React.Fragment>
         <IonAlert
            isOpen={startedDeleting}
            header='Are your sure?'
            message='Do you want to delete this goal? This cannot be undone.'
            buttons={[
               {
                  text: 'No',
                  role: 'cancel',
                  handler: () => {
                     setStartedDeleting(false);
                  },
               },
               {
                  text: 'Yes',
                  handler: deleteGaolHandler,
               },
            ]}
         />
         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonButtons slot='start'>
                     <IonBackButton defaultHref='/courses/list' />
                  </IonButtons>
                  <IonTitle>
                     {selectedCourse
                        ? selectedCourse.title
                        : 'No course found!'}
                  </IonTitle>
                  {!isPlatform('android') && (
                     <IonButtons slot='end'>
                        <IonButton onClick={startAddGaolHandler}>
                           <IonIcon slot='icon-only' icon={addOutline} />
                        </IonButton>
                     </IonButtons>
                  )}
               </IonToolbar>
            </IonHeader>
            <IonContent>
               {selectedCourse && (
                  <IonList>
                     {selectedCourse.goals.map((goal) => (
                        <IonItemSliding key={goal.id}>
                           <IonItemOptions
                              side='start'
                              onClick={startDeleteGoalHandler}
                           >
                              <IonItemOption color='danger'>
                                 <IonIcon icon={trash} slot='icon-only' />
                              </IonItemOption>
                           </IonItemOptions>

                           <IonItem lines='full'>
                              <IonLabel>{goal.text}</IonLabel>
                           </IonItem>

                           <IonItemOptions
                              side='end'
                              onClick={startEditGoalHandler}
                           >
                              <IonItemOption>
                                 <IonIcon icon={create} slot='icon-only' />
                              </IonItemOption>
                           </IonItemOptions>
                        </IonItemSliding>
                     ))}
                  </IonList>
               )}

               {isPlatform('android') && (
                  <IonFab horizontal='end' vertical='bottom' slot='fixed'>
                     <IonFabButton
                        color='secondary'
                        onClick={startAddGaolHandler}
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
