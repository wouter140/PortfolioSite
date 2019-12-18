import React from "react";
import {Parallax} from "react-scroll-parallax/cjs";
import PortfolioNavBar from "./ProjectPageNavBar";
import VisibilitySensor from "react-visibility-sensor/dist/visibility-sensor";
import YouTube from "react-youtube";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class ProjectPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titleVisible: true,
            videoReady: false,
        };
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <PortfolioNavBar title={ this.props.title } projectTitleVisible={ this.state.titleVisible } />
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
                         }}
                    >
                        <div className={"project-video" + (this.state.videoReady ? "" : " hidden")} style={{marginTop: (window.innerHeight * .7 / 2) - ((window.innerWidth / (this.props.videoRatio || 16/9)) / 2)}}>
                            <YouTube
                                videoId={ this.props.videoID || "U-mC90Tu5SM" }
                                opts={{
                                    height: window.innerWidth / (this.props.videoRatio || 16/9),
                                    width: window.innerWidth,
                                    playerVars: { // https://developers.google.com/youtube/player_parameters
                                        autoplay: 1,
                                        controls: 0,
                                        loop: 1,
                                        playlist: this.props.videoID || "U-mC90Tu5SM",
                                        modestbranding: 1,
                                        playsinline: 1
                                    }
                                }}
                                onReady={(event) => {
                                    // The player is loaded and ready
                                    console.log(event);
                                }}
                                onStateChange={(event) => {
                                    console.log(event);

                                    if(event.data === YouTube.PlayerState.UNSTARTED) {
                                        // When the player is unable to start, usually because the browser does not allow autoplay
                                        // TODO: Can show custom play button here to start play instead
                                        this.setState({videoReady: true});
                                    } else if(event.data >= YouTube.PlayerState.PLAYING) {
                                        // Player has started playing the video
                                        this.setState({videoReady: true});
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="card-body text-center card-body-cascade"
                         style={{
                            display: "inline-block",
                            position: "relative",
                            top: "62vh",
                            left: "5%",
                            width: "90%",
                            minHeight: "38vh",
                            backgroundColor: "white",
                            boxShadow: "0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)",
                        }}
                    >
                        <VisibilitySensor onChange={(visible) => this.setState({titleVisible: visible})}>
                            <h1 className="font-weight-bold project-title">
                                <div className="d-inline-block">{ this.props.title }</div>
                            </h1>
                        </VisibilitySensor>

                        <div className="text-left mt-3">
                            { this.props.children }
                        </div>
                    </div>
                </div>
                {/*<div style={{height: "2rem"}} />*/}

            </React.Fragment>
        )
    }
}