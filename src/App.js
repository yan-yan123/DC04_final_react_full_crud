import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import Dashboard from "./components/pages/dashboard";
import View from "./components/video/View";
import Edit from "./components/video/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/musics" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
