import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CustomerMaster from "./Pages/CustomerMaster";
import Quote from "./Pages/Quote";
import AdvancedSearchComponent from "./Pages/AdvancSearch";
import '@progress/kendo-theme-material/dist/all.css';
import './App.css';
import AdvancSearch2 from "./Pages/AdvancSearch2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={CustomerMaster} />
            <Route path="/1" exact component={Quote} />
            <Route path="/2" exact component={AdvancedSearchComponent}/>
            <Route path="/3" exact component={AdvancSearch2}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
