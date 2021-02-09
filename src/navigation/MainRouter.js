import { Switch, Route } from "react-router-dom";
import { NotFoundRouter } from "./NotFoundRouter";
import { ROOT, USERS } from "./Routes";
import Home from "../pages/Home";
import Users from "../pages/Users";

export const MainRouter = () => {
  return (
    <Switch>
      <Route exact path={ROOT} component={Home} />
      <Route exact path={USERS} component={Users} />
      <Route path="*">
        <NotFoundRouter />
      </Route>
    </Switch>
  );
};
