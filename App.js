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

const elem = <span>React Element</span>
const Title = () => (
    <div>
        {elem}
        <h1 id='heading' className='head' tabIndex='5'>
            Hello, React using JSX...
        </h1>
    </div>);

// Component composition
const HeadingComponent = () => (
    <div className='container'>
        {Title()}
        <Title />
        <Title></Title>
        <h1>React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

root.render(<HeadingComponent />);