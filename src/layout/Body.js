import {Switch, Route, useLocation} from 'react-router-dom';
import routes from 'plugins/routes'
import {AnimatePresence} from "framer-motion";

function Body() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        {
          routes.map(x =>
            <Route
              exact={x.exact}
              key={x.path}
              path={`${x.path}`}
              render={props => (
                <x.component {...props} route={x} />
              )} />
          )
        }
      </Switch>
    </AnimatePresence>
  )
}

export default Body;
