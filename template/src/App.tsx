import React, {
  FC, ReactElement
} from "react";
import Home from "./views/Home";
import "./App.css";
const App: FC = (): ReactElement => (
  <div className="app">
    <Home />
  </div>
);
export default App;
