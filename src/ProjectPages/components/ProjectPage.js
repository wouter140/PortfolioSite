import React from "react";

import VisibilitySensor from "react-visibility-sensor/dist/visibility-sensor";

import PortfolioNavBar from "./ProjectPageNavBar";

import InlineYouTubeVideo from "../../components/InlineYouTubeVideo";
import InlineVideo from "../../components/InlineVideo";
import Container from "@material-ui/core/Container";
import {SimpleFooter} from "../../Portfolio/components/Footer";

export default class ProjectPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: 0,
            titleVisible: true,
            videoReady: false,
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", this.OnScrolled.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.OnScrolled.bind(this));
    }

    OnScrolled(event) {
        this.setState({top: document.documentElement.scrollTop});
    }

    render() {
        return (
            <React.Fragment>
                <header className='position-absolute'>
                    <PortfolioNavBar title={ this.props.title.toUpperCase() } projectTitleVisible={ this.state.titleVisible } />
                </header>
                <div className="project-page-container" style={{minHeight: "100vh", marginTop: "3rem"}}>
                    <div className="img-transition d-inline-block overflow-hidden"
                         style={{
                             backgroundImage: "url(\"" + this.props.imageURL + "\")",
                             height: "70vh",
                             width: "100%",
                             backgroundSize: "cover",
                             backgroundRepeat: "no-repeat",
                             backgroundPosition: "center",
                             position: "absolute",
                             top: this.state.top / 3
                         }}
                    >
                        { this.props.videoID && (
                            <InlineYouTubeVideo videoID={this.props.videoID} videoRatio={this.props.videoRatio}
                                                width={window.innerWidth} height={window.innerHeight * .7} />
                        )}
                        { this.props.videoSource && (
                            <InlineVideo className="position-relative w-100 h-100 d-flex"
                                         sources={ this.props.videoSource }
                                         parallaxTop={ this.state.top / 3 }
                            />
                        )}
                    </div>

                    <div style={{
                        position: "relative",
                        height: "62vh",
                        zIndex: -1,
                    }} />

                    <div className="card-body text-center card-body-cascade"
                         style={{
                            display: "inline-block",
                            position: "relative",
                            left: "5%",
                            width: "90%",
                            minHeight: "38vh",
                            backgroundColor: "white",
                            boxShadow: "0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)",
                        }}
                    >
                        <VisibilitySensor onChange={(visible) => this.setState({titleVisible: visible})}>
                            <h1 className="font-weight-bold project-title">
                                <div className="d-inline-block">{ this.props.title.toUpperCase() }</div>
                            </h1>
                        </VisibilitySensor>

                        <Container className="text-left mt-4">
                            { this.props.children }
                            <div style={{height: "2rem"}} />
                        </Container>
                    </div>
                </div>
                
                <SimpleFooter />
            </React.Fragment>
        )
    }
}