import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from "react-router-dom";
import App from './App'
import 'primeflex/primeflex.scss'
window.React = React


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
