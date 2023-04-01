import React from 'react';

const Question = () => {
    return (
        <div>
            <h3 className='text-3xl text-center font-bold border-red-400 m-3'>This is Question Sections</h3>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-3 p-2">
                <div className="collapse-title text-xl font-medium">
                    Props vs state?
                </div>
                <div className="collapse-content">
                    <p>"Props" (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are passed down through the component tree, and can be used to customize the behavior and appearance of a component. Props can be any type of data, including strings, numbers, objects, or even functions.
                        "State", on the other hand, is used to manage data within a component itself. State is mutable, meaning it can be updated within the component. When state changes, the component will re-render to reflect the new state. State should be used to store data that can change over time, such as user input, form data, or the state of a checkbox.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-3 p-2">
                <div className="collapse-title text-xl font-medium">
                    How does useState work?
                </div>
                <div className="collapse-content">
                    <p>useState is a React hook that allows you to add state to a functional component. When you use the useState hook, it returns an array with two elements: 1. The current state value 2. A function to update the state value Here's an example of how to use useState to add state to a component</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-3 p-2">
                <div className="collapse-title text-xl font-medium">
                    Purpose of useEffect other than fetching data?
                </div>
                <div className="collapse-content">
                    <p>The primary purpose of the useEffect hook in React is to handle side effects within functional components. Although fetching data is a common use case for the useEffect hook, there are many other side effects that you might need to handle in your components.
                        Some other examples of side effects that you might handle with useEffect include: Manipulating the DOM: You can use useEffect to modify the DOM, such as adding or removing event listeners, changing styles or class names, or updating the content of an element.Subscribing to services: If your component needs to subscribe to a service, such as a real-time data feed, you can use useEffect to set up the subscription and unsubscribe when the component is unmounted.Setting up timers or intervals: If your component needs to run a timer or interval, you can use useEffect to set up the timer and clear it when the component is unmounted.Updating the document title: If your component needs to update the title of the document, you can use useEffect to set the title.Handling user input: You can use useEffect to handle user input, such as debouncing search queries or validating form data.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-3 p-2">
                <div className="collapse-title text-xl font-medium">
                How Does React work?
                </div>
                <div className="collapse-content">
                    <p>React is a JavaScript library for building user interfaces. It works by breaking up your UI into reusable components and using a "virtual DOM" to efficiently update the UI when changes are made.
Here are the key steps involved in how React works:Building components: You define your UI using components, which are reusable pieces of code that define the structure, behavior, and appearance of a part of your UI. Components can be nested inside other components, allowing you to create complex UIs out of simpler building blocks.Rendering components: Once you've defined your components, you render them to the screen using the ReactDOM library. This converts your component tree into a tree of DOM elements that can be displayed in the browser.Updating components: When a user interacts with your UI, you update the state of your components. React uses a "virtual DOM" to efficiently calculate the minimal set of changes needed to update the UI. Rather than updating the entire DOM tree, React updates only the parts of the tree that have changed.Re-rendering components: When the state of a component changes, React re-renders the component to update its appearance. However, rather than updating the DOM directly, React first calculates the changes using the virtual DOM, and then applies those changes to the real DOM in a single batch update. This approach helps to minimize the number of DOM updates needed, which can significantly improve performance.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;