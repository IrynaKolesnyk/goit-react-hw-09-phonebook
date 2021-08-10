import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
