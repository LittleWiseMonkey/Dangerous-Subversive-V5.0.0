import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './pages/home';
import Designs from "./pages/designs"
import Display from "./pages/display"
import onEnter from './components/onEnter';
import onExit from './components/onExit';

import './style/App.scss';

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/designs", name: "Designs", Component: Designs },
  { path: "/display", name: "Display", Component: Display }
]

function App() {

  return (
    <>

      {routes.map(({ path, name, Component }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={4000}
              classNames="page"
              appear={true}
              unmountOnExit
              onExit={onExit}
              onEnter={onEnter}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}

    </>
  );
}

export default App;
