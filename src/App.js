import React from "react";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCake from "./components/NewCake";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer />
        <IceCreamContainer />
        <NewCake /> */}
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
