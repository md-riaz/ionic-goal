import React, { useState } from 'react';

interface Goal {
   id: string;
   text: string;
}

interface Course {
   id: string;
   title: string;
   enrolled: Date;
   goals: Goal[];
}

interface Context {
   courses: Course[];
   addCourse: (courseTitle: string, courseDate: Date) => void;
   addGoal: (courseId: string, text: string) => void;
   deleteCourse: () => void;
   updateCourse: () => void;
}

export const CoursesContext = React.createContext<Context>({
   courses: [],
   addCourse: () => {},
   addGoal: () => {},
   deleteCourse: () => {},
   updateCourse: () => {},
});

export const CoursesContextProvider: React.FC<{}> = (props) => {
   const [courses, setCourses] = useState<Course[]>([
      {
         id: 'c1',
         title: 'Course 1',
         enrolled: new Date(),
         goals: [],
      },
   ]);

   const addCourse = (title: string, date: Date) => {
      const newCourse: Course = {
         id: Math.random().toString(),
         title,
         enrolled: date,
         goals: [],
      };

      setCourses((prevCourses) => prevCourses.concat(newCourse));
   };

   const addGoal = (courseId: string, text: string) => {
      const newGoal: Goal = {
         id: Math.random().toString(),
         text,
      };
      setCourses((prevCourses) => {
         const updatedCourses = [...prevCourses];

         const updatedCourseIndex = prevCourses.findIndex((course) => course.id === courseId);
         const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.concat(newGoal);
         const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

         updatedCourse.goals = updatedCourseGoals;
         updatedCourses[updatedCourseIndex] = updatedCourse;

         return updatedCourses;
      });
   };

   const deleteCourse = () => {};

   const updateCourse = () => {};

   return (
      <CoursesContext.Provider value={{ courses, addCourse, addGoal, deleteCourse, updateCourse }}>
         {props.children}
      </CoursesContext.Provider>
   );
};
