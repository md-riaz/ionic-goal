import {
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonPage,
   IonButtons,
   IonBackButton,
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
            <h2>this works - course goals page!</h2>
         </IonContent>
      </IonPage>
   );
};
