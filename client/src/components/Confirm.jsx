import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Form, FormGroup, Col, Label, Alert } from 'reactstrap';
import { confirm } from '../actions/auth';
import { redirectTo } from '../actions/common';

class Confirm extends Component {

    onSubmit(event) {
        event.preventDefault();

        this.props.confirm(this.props.user.username, this.code.value);
    }

    redirectToLogin() {
        this.props.redirect('/login');
    }

    render() {
        return (
            <Col sm={{ size: 6, offset: 3 }} className="text-center">
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <h1 className="text-center">Confirm</h1>
                    {this.props.error && (
                        <Alert color="danger">
                            {this.props.error.message}
                        </Alert>
                    )}

                    <FormGroup row>
                        <Label for="code">Code</Label>
                        <Input type="text" name="code" innerRef={(input) => this.code = input} placeholder="Code" required />
                    </FormGroup>

                    <FormGroup row>
                        <Button color="primary" disabled={this.props.inProgress} size="lg" block type="submit">{this.props.inProgress ? 'Confirmando...' : 'Confirmar'}</Button>
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
        confirm: (email, code) => dispatch(confirm(email, code)),
        redirect: (value) => dispatch(redirectTo(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);