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
   addGoal: () => void;
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
   const [courses, setCourses] = useState<Course[]>([]);

   const addCourse = (title: string, date: Date) => {
      const newCourse: Course = {
         id: Math.random().toString(),
         title,
         enrolled: date,
         goals: [],
      };

      setCourses((prevCourses) => prevCourses.concat(newCourse));
   };

   const addGoal = () => {};

   const deleteCourse = () => {};

   const updateCourse = () => {};

   return (
      <CoursesContext.Provider
         value={{ courses, addCourse, addGoal, deleteCourse, updateCourse }}
      >
         {props.children}
      </CoursesContext.Provider>
   );
};
