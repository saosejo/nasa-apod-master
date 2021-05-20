import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Form from "./Form"
import rootReducer from "./reducers";
import renderDatePicker from "./renderDatePicker";

const store = createStore(rootReducer)

export default function Home() {
  return (
    <Provider store={store}>
      <div className="home">
        <Link className="home-link" to="/NasaPhoto" >See into the stars!</Link>
      </div>
      <div className="Date"> 
        <Form />
        <renderDatePicker />
      </div>
    </Provider>
  );
}