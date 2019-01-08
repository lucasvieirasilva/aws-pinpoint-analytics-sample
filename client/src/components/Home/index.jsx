import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Input, Button, Form, FormGroup, Label } from 'reactstrap';
import { Analytics } from 'aws-amplify';

class Home extends Component {
    send(event) {
        event.preventDefault();
        Analytics.record(JSON.parse(this.event.value));
    }

    sendMonetization(event) {
        event.preventDefault();
        const attrs = JSON.parse(this.attributes.value);
        const metrics = JSON.parse(this.metrics.value);
        console.log(attrs, metrics);
        Analytics.record('_monetization.purchase', attrs, metrics);
    }

    render() {
        return (
            <Col>
                <h1>Custom Record</h1>
                <Form onSubmit={(e) => this.send(e)}>
                    <FormGroup>
                        <Label for="event">Event JSON</Label>
                        <Input type="textarea" innerRef={(input) => (this.event = input)} placeholder="Type event here" />
                    </FormGroup>
                    <Button color="primary">Send</Button>
                </Form>

                <h1>Monetization</h1>
                <Form onSubmit={(e) => this.sendMonetization(e)}>
                    <FormGroup>
                        <Label for="attributes">Attributes</Label>
                        <Input type="textarea" innerRef={(input) => (this.attributes = input)} placeholder="Type event attributes here" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="metrics">Metrics</Label>
                        <Input type="textarea" innerRef={(input) => (this.metrics = input)} placeholder="Type event metrics here" />
                    </FormGroup>
                    <Button color="primary">Send</Button>
                </Form>
            </Col>
        );
    }
}

export default connect()(Home);