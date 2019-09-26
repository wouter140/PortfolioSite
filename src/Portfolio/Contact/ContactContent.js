import React from 'react';
import ContentContainer from "../../components/ContentContainer";
import {MDBBtn, MDBIcon, MDBInput} from "mdbreact";

import "./ContactContent.scss"
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

export default class ContactContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phoneNr: "",
            company: "",
            message: "",

            sendingEmail: false,
            successEmail: false
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
        this.formRef.current.className += " was-validated";

        // this.setState({sendingEmail: true, successEmail: false});
        // setTimeout(() => {
        //     this.setState({
        //         name: "",
        //         email: "",
        //         phoneNr: "",
        //         company: "",
        //         message: "",
        //
        //         successEmail: true
        //     });
        //     this.formRef.current.className = this.formRef.current.className.replace(" was-validated", "");
        //     setTimeout(() => {
        //         this.setState({
        //             sendingEmail: false,
        //             successEmail: false
        //         });
        //     }, 2500);
        // }, 2500);

        // Check if the form has all valid values so we can send the mail.
        if(this.formRef.current.checkValidity()) {
            this.setState({sendingEmail: true, successEmail: false});
            ContactContent.postData('/API/Mail', this.state)
                .then(data => {
                    JSON.stringify(data); // JSON-string from `response.json()` call

                    this.setState({
                        name: "",
                        email: "",
                        phoneNr: "",
                        company: "",
                        message: "",

                        successEmail: true
                    });

                    this.formRef.current.className = this.formRef.current.className.replace(" was-validated", "");

                    setTimeout(() => {
                        this.setState({
                            sendingEmail: false,
                            successEmail: false
                        });
                    }, 2500);
                })
                .catch(error => {
                    console.error(error);
                    // this.setState({sendingEmail: false});
                });
        }
    };

    render() {
        return (
            <ContentContainer id="contact-page" className="responsive-text-size"
                              contentTitle={ <span>Contact <strong>Me</strong></span> } >

                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                    ref={ this.formRef }
                >

                    <div className="pt-4">
                        Do you have any questions or an amazing opportunity, you can always contact me using the form below or send me an email directly to <a href="mailto:info@woutergrutter.com">info@woutergrutter.com</a>
                    </div>

                    <MDBInput label="Name"
                          required disabled={ this.state.sendingEmail }
                          value={ this.state.name } onChange={(e) => this.setState({ name: e.target.value })} />

                    <MDBInput type="email" label="Email"
                          required disabled={ this.state.sendingEmail }
                          value={ this.state.email } onChange={(e) => this.setState({ email: e.target.value })} />

                    <MDBInput type="tel" label="Phone" disabled={ this.state.sendingEmail }
                          value={ this.state.phoneNr } onChange={(e) => this.setState({ phoneNr: e.target.value })} />

                    <MDBInput label="Company" disabled={ this.state.sendingEmail }
                          value={ this.state.company } onChange={(e) => this.setState({ company: e.target.value })}/>

                    <MDBInput type="textarea" label="Message" rows="6"
                          required disabled={ this.state.sendingEmail }
                          value={ this.state.message } onChange={(e) => this.setState({ message: e.target.value })}/>

                    <div style={{height: "3.6rem"}}>

                        <div className="d-block position-relative">
                            <MDBBtn color="success" type="submit" disabled={ this.state.sendingEmail }>
                                <MDBIcon icon="paper-plane" />
                                <span className="ml-2">Send Message</span>
                            </MDBBtn>
                            <Fade
                                in={this.state.sendingEmail}
                                style={{
                                    transitionDelay: this.state.sendingEmail ? '200ms' : '0ms',
                                }}
                                unmountOnExit
                            >
                                {this.state.successEmail ? (
                                    <MDBIcon icon="check" className="send-email-success" />
                                ) : (
                                    <CircularProgress size={24} thickness={3.6} className="send-email-loader" />
                                ) }
                            </Fade>
                        </div>
                    </div>

                </form>

            </ContentContainer>
        );
    }
}