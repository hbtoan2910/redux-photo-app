import React, { Suspense } from "react";
import "./App.css";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>
        <ul>
          <li><Link to="/photos">Go to Photo page</Link></li>
          <li><Link to="/photos/add">Go to Add new photo page</Link></li>
          <li><Link to="/photos/123">Go to Edit photo page</Link></li>
        </ul>



        <Suspense fallback={<h3>Loading....</h3>}>
          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>

            <Route path="/photos" component={Photo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
