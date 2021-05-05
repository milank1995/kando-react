import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CustomerMaster from "./Pages/CustomerMaster";
import Quote from "./Pages/Quote";
import DrawerComponent from "./Pages/Drawer";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CustomerMaster} />
          <Route path="/1" exact component={Quote} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
