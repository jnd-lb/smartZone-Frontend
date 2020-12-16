import './App.css';
import Showroom from './containers/showroom/showroom';
import Login from "./containers/dashboard/login/login";
import LandingPage from "./containers/landing_page/landingpage";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import RouteGuard from "./Utils/routGuard";
import Dashboard from "./containers/dashboard/dashboard"
import Add from "./containers/dashboard/add/add"

function App() {
  return (
    <>
    <BrowserRouter >
      <Switch>
      <Route path={"/"} exact component={LandingPage}/>
      <RouteGuard path={"/dashboard/add"} exact component={Add}/>
      <Route path={"/dashboard/login"} exact component={Login}/>
      <RouteGuard path={"/dashboard"} exact component={Dashboard}/>
      <Route path={"/models"} exact component={Showroom}/>
      </Switch>
    </BrowserRouter>
    <div className="background"></div>
    </>
  );
}

export default App;
