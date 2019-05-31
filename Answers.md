# Answers

1. What is React JS and what problems does it try and solve?
   React is a Javascript library that allows for creation of interface components that can store data, pass it around, and re-render automatically when detecting a change.
2. What does it mean to _think_ in react?
   Thinking in react is a description of how components and ui features are laid out and are composed. What makes the most sense in terms of how to store data, render data, and make it functional for a user.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   Class/Stateful components hold a state for your application (and other components may indeed have their own state) that allows for the transfer of properties (props) throughout your application. They automatically include properties when instantiating a class. Functional components require props to be passed in as a parameter when declaring. Both require being exported and imported in their requisite components that are calling them.

4. Describe state.
   State is like a big warehouse that has a lot of traffic coming and going. It stores things but that stuff may need to move around to be used elsewhere to create a network of things that people can make use of and need.

5. Describe props.
   Props (or properties, is a word that I think confuses people, calling the properties 'props' is just convention) are the things that we pass around through 'class-like' syntax in our JSX that enable access to state in our components throughout the application.
