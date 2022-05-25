import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-3xl '>1.How will you improve the performance of a React Application?</h1>
                <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
                <p>1.Keeping component state local where necessary</p>
                <p>2.Memoizing React components to prevent unnecessary re-renders</p>
                <p>3.Code-splitting in React using dynamic import()</p>
                <p>4.Windowing or list virtualization in React</p>
                <p>5.Lazy loading images in React</p>
            </div>
            <div>
                <h1 className='text-3xl'>2.What are the different ways to manage a state in a React application?</h1>
                <p>In order to implement state in our components, React provides us with a hook called useState. Let's see how it works with the following example.

                    We'll use the classic counter example, in which we're displaying a number and we have several buttons to increase, decrease, or reset that number.

                    This is a good example of an app where we need to store a piece of information and render something different every time that information changes.</p>
            </div>
            <div className='my-10'>
                <h1 className='text-3xl'>3. How does prototypical inheritance work?</h1>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                    Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
            </div>
            <div>
                <h1 className='text-3xl'>4.What is a unit test? Why should write unit tests?</h1>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
                <p>A unit can be almost anything you want it to be -- a line of code, a method, or a class. Generally though, smaller is better. Smaller tests give you a much more granular view of how your code is performing. There is also the practical aspect that when you test very small units, your tests can be run fast; like a thousand tests in a second fast.</p>
            </div>
        </div>
    );
};

export default Blogs;