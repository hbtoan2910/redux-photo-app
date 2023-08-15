import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import AddEditPage from './pages/AddEdit';

const Photo = (props) => {
    const match = useRouteMatch() ;
    //console.log(match);

    return (
        <div>
            <div>This is PhotoComponent</div>
            <Switch>
                <Route path={`${match.url}/add`} component={AddEditPage}></Route>
                <Route path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            </Switch>
        </div>

    );
};

export default Photo;