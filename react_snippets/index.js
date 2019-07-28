import React from 'react';
import ReactDOM from 'react-dom';

// const TestJSX = (props) => {
//     return (
//         <div className="test"> {props.children}
//             <div>Own Thing</div>
//         </div>
//     )
// }

const Test = (props) => {
    return (
        React.createElement(
            "div",
            {
                className: "test"
            },
            [
                ...props.children,
                React.createElement("div", {}, "Own Thing")
            ]
        )
    )
}
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
  return React.createElement(Test, {
      className: 'AppHead'
  }, [
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

// const AppJSX = () => {
//     return (
//         <Test>App Header</Test>
//     )
// }

ReactDOM.render(
  React.createElement(App),
  document.getElementById("container")
)
