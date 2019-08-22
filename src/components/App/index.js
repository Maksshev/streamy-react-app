import React from 'react'
import Routes from '../../routes'
import {Router} from 'react-router-dom'
import history from '../../history'

const App = () => {
    return (
        <Router history={history}>
            <Routes/>
        </Router>
    );
};

export default App;
