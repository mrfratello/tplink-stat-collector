import {Switch, Route} from 'react-router-dom'
import NavMenu from './components/navMenu/NavMenu'
import {AddressList} from './components/addressList/AddressList'
import NotFoundPage from './components/notFoundPage/NotFoundPage'

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/nova-colored/theme.css'

const App  = () =>
    <div className="App p-grid" >
        <div className="App--SideMenu p-col-fixed">
            <NavMenu />
        </div>
        <div className="App--Content p-col">
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