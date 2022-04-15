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
} from '@ionic/react';
import { create, trash } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import { COURSE_DATA } from './Courses';

export const CourseGoals: React.FC<{}> = () => {
   const { courseId } = useParams<{ courseId: string }>();
   const selectedCourse = COURSE_DATA.find((course) => course.id === courseId);

   const deleteGoalHandler = () => {
      console.log('Deleting goal:');
   };

   const startEditGoalHandler = (event: React.MouseEvent) => {
      event.stopPropagation();
   };

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot='start'>
                  <IonBackButton defaultHref='/' />
               </IonButtons>
               <IonTitle>
                  {selectedCourse ? selectedCourse.title : 'No course found!'}
               </IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <IonList>
               {selectedCourse &&
                  selectedCourse.goals.map((goal) => (
                     <IonItemSliding key={goal.id}>
                        <IonItemOptions
                           side='start'
                           onClick={deleteGoalHandler}
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
         </IonContent>
      </IonPage>
   );
};
