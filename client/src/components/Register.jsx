import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Form, FormGroup, Col, Label, Alert } from 'reactstrap';
import { register } from '../actions/auth';
import { redirectTo } from '../actions/common';

class Register extends Component {

    onSubmit(event) {
        event.preventDefault();

        this.props.register(this.email.value, this.password.value);
    }

    redirectToLogin() {
        this.props.redirect('/login');
    }

    render() {
        return (
            <Col sm={{ size: 6, offset: 3 }} className="text-center">
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <h1 className="text-center">Register</h1>
                    {this.props.error && (
                        <Alert color="danger">
                            {this.props.error.message}
                        </Alert>
                    )}
                    <FormGroup row>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" innerRef={(input) => this.email = input} placeholder="Email address" required />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" innerRef={(input) => this.password = input} placeholder="Password" required />
                    </FormGroup>

                    <FormGroup row>
                        <Button color="primary" disabled={this.props.inProgress} size="lg" block type="submit">{this.props.inProgress ? 'Registrando...' : 'Register'}</Button>
                    </FormGroup>

                    <label>Or</label>

                    <FormGroup row>
                        <Button color="primary" type="button" size="lg" block onClick={e => this.redirectToLogin(e)}>Login</Button>
                    </FormGroup>
                </Form>
            </Col>
        )
    }
}

const mapStateToProps = state => ({
    ...state.auth,
    inProgress: state.common.inProgress
});

const mapDispatchToProps = dispatch => {
    return {
        register: (email, password) => dispatch(register(email, password)),
        redirect: (value) => dispatch(redirectTo(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);