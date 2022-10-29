import React from "react";
import ReactDOM from "react-dom";


class LifeCycle extends React.Component {

    UNSAFE_componentWillMount()  {
        console.log("before comp mounted");
        console.log(ReactDOM.findDOMNode(this));
    };

    componentDidMount() {
        console.log("after comp mounted");
        console.log(ReactDOM.findDOMNode(this));

    };

    comp

    render() {
        return (
            <div>
                <h1>Hellow React!!!</h1>
            </div>
        )
    }
}

export default LifeCycle;