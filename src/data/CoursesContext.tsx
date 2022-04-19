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
   deleteGoal: (courseId: string, goalId: string) => void;
   updateGoal: (courseId: string, goalId: string, newText: string) => void;
}

export const CoursesContext = React.createContext<Context>({
   courses: [],
   addCourse: () => {},
   addGoal: () => {},
   deleteGoal: () => {},
   updateGoal: () => {},
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

   const deleteGoal = (courseId: string, goalId: string) => {
      setCourses((prevCourses) => {
         const updatedCourses = [...prevCourses];

         const updatedCourseIndex = prevCourses.findIndex((course) => course.id === courseId);
         const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.filter((goal) => goal.id !== goalId);
         const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

         updatedCourse.goals = updatedCourseGoals;
         updatedCourses[updatedCourseIndex] = updatedCourse;

         return updatedCourses;
      });
   };

   const updateGoal = (courseId: string, goalId: string, newText: string) => {
      setCourses((prevCourses) => {
         const updatedCourses = [...prevCourses];

         const updatedCourseIndex = prevCourses.findIndex((course) => course.id === courseId);
         const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.slice();
         const updatedCourseGoalIndex = updatedCourseGoals.findIndex((goal) => goal.id === goalId);
         const updatedGoal = { ...updatedCourseGoals[updatedCourseGoalIndex], text: newText };
         updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;

         const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

         updatedCourse.goals = updatedCourseGoals;
         updatedCourses[updatedCourseIndex] = updatedCourse;

         return updatedCourses;
      });
   };

   return (
      <CoursesContext.Provider value={{ courses, addCourse, addGoal, deleteGoal: deleteGoal, updateGoal: updateGoal }}>
         {props.children}
      </CoursesContext.Provider>
   );
};
