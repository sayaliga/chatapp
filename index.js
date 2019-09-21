import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

import Login from "./src/components/login";

const SERVERURL = "http://localhost:8000";

class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedin: false,
            error: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        /*const socket = io.connect(SERVERURL);
        socket.on("connected", () => {
            this.setState({
                text: "Connected"
            })
        })*/
    }

    handleSubmit(username, password) {
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.post(SERVERURL, { username, password }, config).then((res) => {
            if (res.status === 200) {
                if (res.data.error) {
                    this.setState({
                        error: res.data.error
                    })
                }
                if (res.data.loggedin) {
                    this.setState({
                        loggedin: true
                    });
                }
            }
        });
    }

    render() {
        return !this.state.loggedin ? <Login error={this.state.error} handleSubmit={this.handleSubmit}/> : <h1>Done</h1>;
    }
}

ReactDom.render(<AppComponent />, document.getElementById("app"));