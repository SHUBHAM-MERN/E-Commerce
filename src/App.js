
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Cart from './Cart';
import Login from './Login';
import SighUp from './SighUp';
function App() {
  return (
    <>
      
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SighUp}></Route>
     </Switch>
      </>
  );
}

export default App;
