import React from 'react';
import ContentContainer from "../../components/ContentContainer";
import {MDBBtn, MDBIcon, MDBInput} from "mdbreact";

import {bugsnagClient} from "../../Bugsnag";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

import "./ContactContent.scss"

export default class ContactContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phoneNr: "",
            company: "",
            message: "",

            errorMessage: "",

            sendingEmail: false,
            successEmail: false,
            recaptchaVerified: false,
        };

        this.formRef = React.createRef();
        this.recaptchaRef = React.createRef();
    }

    recaptchaChange(e) {
        this.setState({recaptchaVerified: true}, () => {
            if(this.state.sendingEmail) {
                this.submitHandler();
            }
        });
    }
    recaptchaErrorTimeout(e) {
        this.setState({recaptchaVerified: false, sendingEmail: false, errorMessage: "There was an issue with " +
                "ReCAPTCHA. Please make sure you are connected to the internet and are not blocking google.com. You " +
                "can also contact me using the email above!"});
    }

    submitHandler = event => {
        if(event) {
            event.preventDefault();
        }
        this.formRef.current.className += " was-validated";

        // Check if the form has all valid values so we can send the mail.
        if(this.formRef.current.checkValidity()) {
            this.setState({
                sendingEmail: true,
                successEmail: false,
                errorMessage: ""
            }, () => {
                    if(this.state.recaptchaVerified) {
                        this.sendMailRequest();
                    } else {
                        this.recaptchaRef.current.execute()
                    }
                });
        }
    };

    sendMailRequest() {

        bugsnagClient.leaveBreadcrumb('Contact Information Send', this.state);

        emailjs.sendForm(process.env.REACT_APP_CONTACT_SERVICE_ID, process.env.REACT_APP_CONTACT_TEMPLATE_ID, this.formRef.current, process.env.REACT_APP_CONTACT_USER_ID)
            .then((result) => {
                console.log(result.text);

                this.formRef.current.className = this.formRef.current.className.replace(" was-validated", "");

                this.setState({
                    successEmail: true,
                    recaptchaVerified: false,
                    // message: "" //TODO: Show message that the email was send and they got a confirmation email
                });
            }, (error) => {
                console.error(error.text);

                //TODO: Error message

                this.setState({
                    sendingEmail: false,
                    successEmail: false,
                    recaptchaVerified: false,
                    errorMessage: "There was an issue sending your email! Please try again later or contact me directly using the email above."
                });

                bugsnagClient.notify("Contact request send error: " + JSON.stringify(error));
            })
            .finally(() => {
                this.recaptchaRef.current.reset();
            })
    }

    render() {
        return (
            <ContentContainer id="contact-page" className="responsive-text-size"
                              contentTitle={ <span>Contact <strong>Me</strong></span> } >

                <form
                    className="needs-validation container mx-auto"
                    onSubmit={this.submitHandler.bind(this)}
                    noValidate
                    ref={ this.formRef }
                >

                    <div className="pt-4">
                        Do you have any questions or a cool opportunity, you can always contact me using the form below or send me an email directly to <a href="mailto:info@woutergrutter.com">info@woutergrutter.com</a>
                    </div>

                    <div>

                        <p className="text-danger mt-4">
                            {this.state.errorMessage}
                        </p>

                        <MDBInput label="Name" name="name"
                                  required
                                  value={ this.state.name } onChange={(e) => this.setState({ name: e.target.value })} />

                        <MDBInput type="email" label="Email" name="email"
                                  required
                                  value={ this.state.email } onChange={(e) => this.setState({ email: e.target.value })} />

                        <MDBInput type="tel" label="Phone" name="phone"
                                  value={ this.state.phoneNr } onChange={(e) => this.setState({ phoneNr: e.target.value })} />

                        <MDBInput label="Company" name="company"

                                  value={ this.state.company } onChange={(e) => this.setState({ company: e.target.value })}/>

                        <MDBInput type="textarea" label="Message" rows="6"
                                  required className="overflow-auto"
                                  value={ this.state.message } onChange={(e) => this.setState({ message: e.target.value })}/>

                        <MDBInput type="textarea" name="message" hidden
                                  value={ this.state.message.split("\n").join('<br/>') } />

                        <ReCAPTCHA
                            ref={this.recaptchaRef}
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                            onChange={this.recaptchaChange.bind(this)}
                            onErrored={this.recaptchaErrorTimeout.bind(this)}
                            onExpired={this.recaptchaErrorTimeout.bind(this)}
                            size="invisible"
                        />

                        <p className="text-muted font-small">
                            <span>This site is protected by reCAPTCHA and the Google </span>
                            <span><a href="https://policies.google.com/privacy">Privacy Policy</a> and </span>
                            <span><a href="https://policies.google.com/terms">Terms of Service</a> apply.</span>
                        </p>

                        { this.state.successEmail && (
                            <p className="note-success p-3 text-muted row">
                                <div className="position-relative col col-1">
                                    <MDBIcon icon="check" className="send-email-success" />
                                </div>
                                <div className="col col-11">
                                    <span className="font-weight-bold">Thanks for contacting me!</span><br/>
                                    <span>
                                        I have received your email and will be in contact soon. You should have received a confirmation email with the address you provided.<br/>
                                        If you don't see it, please check you spam folder.
                                    </span>
                                </div>
                            </p>
                        )}

                        <div style={{height: "3.6rem"}}>

                            <div className="d-block position-relative">
                                <div className="d-block position-absolute submit-button">
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
                        </div>

                    </div>

                </form>

            </ContentContainer>
        );
    }
}