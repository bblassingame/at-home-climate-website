import React from 'react';
import ReactDOM from 'react-dom';

console.log('Starting Application');

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Bo" />;
ReactDOM.render(
  element,
  document.getElementById('main')
);