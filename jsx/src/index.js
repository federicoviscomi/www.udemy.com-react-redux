import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return "asdfbuttonfdsa";
}

const App = () => {
    const buttonText = ["i want", "you to", 1234];
    const asdf = {
        asdf: '234'
    };
    return (
        <div style={{border: '1px'}}>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {asdf.asdf}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

