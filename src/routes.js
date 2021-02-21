import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Table} from './table/Table'
import {Form} from './form/Form'

export const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path='/table' component={Table}/>
            <Route path='/form' component={Form}/>
        </Switch>
    </Router>
)