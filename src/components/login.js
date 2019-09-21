import React from "react";
import ReactDom from "react-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userinput = React.createRef();
        this.pwdinput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {
        this.props.handleSubmit(
            this.userinput.current.value,
            this.pwdinput.current.value
        );
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>{this.props.error}</div>
                <div>Username</div>
                <input type="textbox" ref={this.userinput}></input>
                <div>Password</div>
                <input type="password" ref={this.pwdinput}></input>
                <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        );
    }
}

export default Login;