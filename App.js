import React from 'react';
import ReactDOM from 'react-dom/client';


// React.createElement => React Element (JS Object) => HTMLElement(while render)

// const heading = React.createElement(
//     'h1', 
//     {id: "heading"}, 
//     'Hello, React'
// );

// console.log('heading', heading);

// JSX - is not HTML in JS - It is HTML like syntax
// JSX traspiled before it reaches the JS Engine - Parcel(Babel)
// JSX => React.createElement => React Element (JS Object) => HTMLElement(while render)
const jsxHeading = <h1 id='heading'>Hello, React using JSX</h1>;

console.log('jsxHeading', jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

root.render(jsxHeading);