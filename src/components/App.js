import React from "react";
import { connect } from "react-redux";
import "./../styles/App.css";
import {
  increment,
  decrement
} from "../actions/counterActions";

const App = props => {
  return (
    <div>
      <h1>{props.count}</h1>

      <button onClick={props.increment}>
        Increment
      </button>

      <button onClick={props.decrement}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);