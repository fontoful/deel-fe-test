# Deel FE test - Questionnaire

1. What is the difference between Component and PureComponent? give an
example where it might break my app.

R/ When in a class-based component context. a Class extending React.Component will be performing a re-render every time his parent component has re-rendered, mainly because chances are the props changed as well. In contrast, a component created by extending PureComponent class, will only be re-rendering if the specific props passed down to it have changed. It will avoid any re-render if it's not the case. Bear in mind that the reason why with PureComponent won't re-render it's because the shouldComponentUpdate is performing a shallow comparison.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

R/ A component might get out-of-sync in a way or might be missing out on updates since the lifecycle will get the component to check props and state but won't get him to be paying attention to updates done to the Context. I think using React.memo might be a better idea since this will also check for updates to the context as well.

3. Describe 3 ways to pass information from a component to its PARENT.
R/

1. props
2. callbacks

both props and callbacks are very similar fashion. Parent passes down a prop this can be invoked by the child component to either: pass data up or execute a state setting function e.g. setState

3. context
Since this is global. Dispatching actions that update the global store, this will still be communicated to the parent component.


4. Give 2 ways to prevent components from re-rendering.
R/
  Piggy backing on the first two quetions (which brought this upp):
 1. React.memo high-order component
 2. PureComponent + shouldComponentUpdate

5. What is a fragment and why do we need it? Give an example where it might
break my app.
R/ it's a way to group React elements and let them be "children" elements without needing to create (often times) unnecessary parent Nodes like a div surrouding two h1s'

6. Give 3 examples of the HOC pattern.
R/ 

1. a withDataFetching(myComponent)
A Component that is taking care of re-usable loading/data state that is passed down to children Components. 

2. a Layout component
often used as a way to add headers, footers, sidebars and abstract any structuring from the component being rendered.

3. an Authentication component HOC
This one is very common as well for passing and reutilizing the logged user's context. 

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

8. How many arguments does setState take and why is it async.
R/
I'd argue it's more of a syntax thing for this one. 
Promises will be able to handle it since a Promise object has internal state and will invoke a .catch and will give you access to the error argument if it gets called. This allows you to fail silently and still do something with the error object if you need to.

Callbacks isn't used that often anymore. It's a bit vague for me considering how long it's been but I remember you could accept the error object as first parameter and you'd get it thrown at you had an error occurrend during the execution

async/await ~> this one is similar to a Promise. You sort of "catch" it by adding a try/catch block and the catch block will expose the error object that got thrown when the exception occurred

9. List the steps needed to migrate a Class to Function Component.
R/ 
Aside from the obvious syntax (going from class to function) you need to handle the lifecycle methods in one (not limited to one though 🤔) useEffect and work out your way so it's performing every possible side effect the class component was handling for component mounting, unmounting, state changes and so on.

10. List a few ways styles can be used with components.
R/
- CSS modules
- CSS imports bound to html elements
- Inline styling
- css-in-js approaches like Material UI or Styled components
- Built-in components from libs like BootStrap and overriding styles through objects

11. How to render an HTML string coming from the server.
R/
It's a bit of a tradeoff since you pose a security thread but you could use the prop dangerouslySetInnerHTML to inser it like that