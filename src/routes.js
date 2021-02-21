import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Table} from './table/Table'

export const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path='/table' component={Table}/>
        </Switch>
    </Router>
)