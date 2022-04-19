import {
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonPage,
   IonButtons,
   IonBackButton,
   IonList,
   IonIcon,
   IonButton,
   IonFab,
   IonFabButton,
   isPlatform,
   IonAlert,
   IonToast,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { EditableGoalItem } from '../components/EditableGoalItem';
import { EditModal } from '../components/EditModal';
import { CoursesContext } from '../data/CoursesContext';

export const CourseGoals: React.FC<{}> = () => {
   const [startedDeleting, setStartedDeleting] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   const [isEditing, setIsEditing] = useState(false);

   const [selectedGoal, setSelectedGoal] = useState<{
      id: string;
      text: string;
   } | null>(null);

   const sliddingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

   const { courseId } = useParams<{ courseId: string }>();
   const coursesCtx = useContext(CoursesContext);

   const selectedCourse = coursesCtx.courses.find(
      (course) => course.id === courseId
   );

   const startDeleteGoalHandler = () => {
      setStartedDeleting(true);
   };

   const deleteGaolHandler = () => {
      setStartedDeleting(false);
      setToastMessage('Goal deleted!');
   };

   const startAddGaolHandler = () => {
      setIsEditing(true);
      setSelectedGoal(null);
   };

   const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
      event.stopPropagation();
      const goal = selectedCourse?.goals.find((g) => g.id === goalId);

      sliddingOptionsRef.current?.closeOpened();

      if (!goal) {
         return;
      }

      setIsEditing(true);
      setSelectedGoal(goal);
   };

   const cancelEditGoalHandler = () => {
      setIsEditing(false);
      setSelectedGoal(null);
   };

   const addGoalHandler = (goal: string) => {
      coursesCtx.addGoal(courseId, goal);
      setIsEditing(false);
   };

   return (
      <React.Fragment>
         <EditModal
            show={isEditing}
            onCancel={cancelEditGoalHandler}
            onSave={addGoalHandler}
            editedGoal={selectedGoal}
         />
         <IonToast
            isOpen={!!toastMessage}
            message={toastMessage}
            duration={2000}
            onDidDismiss={() => setToastMessage('')}
         />
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
                        <EditableGoalItem
                           key={goal.id}
                           slidingRef={sliddingOptionsRef}
                           text={goal.text}
                           onStartDelete={startDeleteGoalHandler}
                           onStartEdit={startEditGoalHandler.bind(
                              null,
                              goal.id
                           )}
                        />
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
