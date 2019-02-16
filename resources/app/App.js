import {Switch, Route} from 'react-router-dom'
import NavMenu from './components/navMenu/NavMenu'
import AddressList from './components/address/list/List'
import NotFoundPage from './components/notFoundPage/NotFoundPage'


const App  = () =>
    <div className="App" >
        <div className="App--SideMenu">
            <NavMenu />
        </div>
        <div className="App--Content">
            <Switch>
                <Route path='/'
                       exact
                       render={() =>
                           <AddressList addresses={[{"address":"11:22:33:44:55:66", "name":"My computer"}]} />
                       } />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </div>

export default App