import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Confirm from './Confirm';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { redirected } from '../actions/common';
import { logged } from '../actions/auth';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.logged();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      nextProps.history.push(nextProps.redirectTo);
      nextProps.redirected();
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.user,
    inProgress: state.common.inProgress,
    redirectTo: state.common.redirectTo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    redirected: () => dispatch(redirected()),
    logged: () => dispatch(logged())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
