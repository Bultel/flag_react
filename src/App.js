import Home from "./pages/Home";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    // browserrouter doit englober toutes la page
    <BrowserRouter>
    {/* switxh teste toute les routes si aucune dispo, erreur 404 */}
      <Switch>
        {/* defini la route du component, exact pour avoir une route exacte */}
        <Route path = "/" exact component = {Home}/>
        <Route path = "/about" exact component = {About}/>
        {/* Route si la route est inexacte */}
        <Route component = {NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;