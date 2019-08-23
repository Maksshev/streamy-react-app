import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from "../hoc/Layout";
import StreamList from '../components/streams/StreamList'
import StreamCreate from '../components/streams/StreamCreate'
import StreamDelete from '../components/streams/StreamDelete'
import StreamEdit from '../components/streams/StreamEdit'
import StreamShow from '../components/streams/StreamShow'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                <Route path="/streams/:id" exact component={StreamShow}/>
                <Route path="/*" exact component={StreamList}/>
            </Switch>
        </Layout>
    );
};

export default Routes;
