import './App.css';
import Home from "./component/Pages/Home/Home"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Preview from "./component/Preview/Preview"
import SignIn from './component/Sign In/SignIn';
import SignUp from './component/Sign Up/SignUp';

function App() {

  return (
        <>         
                  <BrowserRouter basename="/Netfix">
                        <Switch>
                             <Route exact path="/" component={Home} />
                             <Route exact path="/login" component={SignIn} />
                             <Route exact path="/register" component={SignUp} />
                             <Route exact path="/Preview" component={Preview} />
                        </Switch>  
                  </BrowserRouter>
             
        </>
  );
}

export default App;