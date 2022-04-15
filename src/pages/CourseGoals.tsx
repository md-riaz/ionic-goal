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
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { COURSE_DATA } from './Courses';

export const CourseGoals: React.FC<{}> = () => {
   const { courseId } = useParams<{ courseId: string }>();
   const selectedCourse = COURSE_DATA.find((course) => course.id === courseId);

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
                     <IonItem key={goal.id} lines='full'>
                        <IonLabel>{goal.text}</IonLabel>
                     </IonItem>
                  ))}
            </IonList>
         </IonContent>
      </IonPage>
   );
};
