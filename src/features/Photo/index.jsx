import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

const Photo = (props) => {
    const match = useRouteMatch() ;
    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={MainPage}></Route>
                <Route path={`${match.url}/add`} component={AddEditPage}></Route>
                <Route path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            </Switch>
        </div>

    );
};

export default Photo;