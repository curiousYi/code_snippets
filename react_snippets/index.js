import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {

  console.log('pet created')
  console.log(props)

  return React.createElement("div", {}, props.children)
}

const Child = (props) => {
  console.log('child created');
  console.log(props)
  return React.createElement("div", {}, "Child")
}

const App = () => {
  return React.createElement('h1', {}, [
    React.createElement(Pet, {
      className: 1,
      Props: {
        foo: 'bar'
     },
      Baz: 'woot'
    },
      'Nested thing'
    ),
    React.createElement(Pet, {
      className: 1,
      Props: {
        foo: 'bar'
     },
      Baz: 'woot'
    },
      [React.createElement(Child,
        {},
        []),
      React.createElement(Child,
        {},
        [])]
    )
  ])
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("container")
)
