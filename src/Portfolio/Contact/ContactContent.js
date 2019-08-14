import React from 'react';
import ContentContainer from "../../components/ContentContainer";
import {MDBBtn, MDBInput} from "mdbreact";

import "./ContactContent.scss"

export default class ContactContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phoneNr: "",
            company: "",
            message: ""
        };

        this.formRef = React.createRef();
    }

    static postData(url = '', data) {
        // Default options are marked with *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: data, // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses JSON response into native JavaScript objects
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";

        // Check if the form has all valid values so we can send the mail.
        if(this.formRef.current.checkValidity()) {
            ContactContent.postData('/API/Mail', this.state)
                .then(data => {
                    JSON.stringify(data); // JSON-string from `response.json()` call

                    this.setState({
                        name: "",
                        email: "",
                        phoneNr: "",
                        company: "",
                        message: ""
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    render() {
        return (
            <ContentContainer id="contact-page" className="responsive-text-size"
                              contentTitle="Contact" >

                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                    ref={ this.formRef }
                >

                    <MDBInput label="Name"
                          required
                          value={ this.state.name } onChange={(e) => this.setState({ name: e.target.value })} />

                    <MDBInput type="email" label="Email"
                          required
                          value={ this.state.email } onChange={(e) => this.setState({ email: e.target.value })} />

                    <MDBInput type="tel" label="Phone"
                          value={ this.state.phoneNr } onChange={(e) => this.setState({ phoneNr: e.target.value })} />

                    <MDBInput label="Company"
                          value={ this.state.company } onChange={(e) => this.setState({ company: e.target.value })}/>

                    <MDBInput type="textarea" label="Message" rows="6"
                          required
                          value={ this.state.message } onChange={(e) => this.setState({ message: e.target.value })}/>

                    <div style={{height: "3.6rem"}}>
                        <MDBBtn color="success" type="submit">
                            Send Message
                        </MDBBtn>
                    </div>

                </form>

            </ContentContainer>
        );
    }
}