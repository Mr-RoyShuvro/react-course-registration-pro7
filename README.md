1.  Project features are given below:

The purpose of project is to build an application program to reduce manual work for managing the course through internet. This application has good appearance and 
easy to operate. It is very simple and easy to access. This project provides lots of features to manage in very well manner.
1. Students can look at all the different classes available and get details about what each one is about.
2. Each course has a course-title, details of the specific courses, price, credits and other information you think is necessary.
3. You can see your total credit hour and remaining credit hour which help you to select the multiple courses.
4. If you mistakely select specific course in multiple time, you will be notified.


2.  Discusssion about how I managed the state in my assignment project.
State is a dynamic data storage that provides a mechanism for components to manage, keep track of changing data, and trigger re-rendering when it is updated. Due to 
modularization in React, state serves as a container that encapsulates relevant data, logic, and behavior within a component.
Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and 
then pass it down to them via props. This is known as lifting state up, and it's one of the most common things you will do writing React code.
Working with Props and State, components constantly interact with props and state. For instance, a parent component might hold a state that it passes down as props 
to its child components. These child components may then use this data for rendering or logic but cannot modify it directly.
