import React from 'react'
import Header from '../../components/Header'
import {Container} from 'react-bootstrap'

const Layout = (props) => {
    return (
        <Container fluid className="h-100">
            <Header/>
            {props.children}
        </Container>
    );
};

export default Layout;
