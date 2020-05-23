import React from 'react';
import './App.scss';
import SideBar from "./SideBar/SideBar";
import {Switch, Route, Redirect} from 'react-router-dom';
import Overview from "./screens/Overview/Overview";
import Goals from "./screens/Goals/Goals";
import ManageJobs from "./screens/ManageJobs/ManageJobs";

function App() {
    return (
        <div className="App">
            <SideBar/>
            <div className='App__screen'>
                <div>
                    <Switch>
                        <Route path='/' exact><Redirect to='/overview'/></Route>
                        <Route path='/overview' exact render={() => <Overview/>}/>
                        <Route path='/goals' exact render={() => <Goals />} />
                        <Route path='/manage-jobs' render={() => <ManageJobs />} />
                        <Route path='**'><Redirect to='/overview' /></Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
