import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import LeftSide from './LeftSide';
import EditProfile from './EditProfile';
import SavedMess from './SavedMess';

const Settings = () => {
    return (
        <BrowserRouter>
            <Switch>
                <div className="settings-container d-flex">
                    <LeftSide/>
                    <Route exact path="/customer/settings" component={EditProfile } />
                    <Route path="/customer/settings/savedmess" component={SavedMess} />
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Settings
