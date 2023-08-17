import React, { Suspense } from "react";
import "./App.css";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<h3>Loading....</h3>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>

            <Route path="/photos" component={Photo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
