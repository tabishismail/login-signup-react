import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import {Login,SignUp} from "../containers/index.js";

  function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route path="/" component={Login}/>
                  <Route path="/signup" component={SignUp}/>
                      
              </Switch>
          </Router>
      )
  }

  export default AppRouter;