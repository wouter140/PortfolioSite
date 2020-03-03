import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InlineVideo extends Component {

    constructor(props) {
        super(props);

        this.autoPlay = true;
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            switch(connection.type) {
                case "bluetooth":
                case "cellular":
                case "none":
                    this.autoPlay = false;
                    break;

                // case "wimax":
                // case "other":
                // case "unknown":
                default:
                    break;
            }
        }
        this.video = React.createRef();
        this.videoContainerRef = React.createRef();
    }

    state = {
        videoReady: false,
        playing: false,
        muted: this.props.muted,
    };

    onCanPlay() {
        if(this.props.showOnCanPlay) {
            this.setState({videoReady: true});
            this.video.current.play();
        }
    }
    onCanPlayThrough() {
        this.setState({videoReady: true});
        this.video.current.play();
    }

    onPlay() {
        this.setState({playing: true});
    }
    onPause() {
        this.setState({playing: false});
    }

    ToggleFullscreen(state) {
        if(!state)
            state = !this.state.isFullscreen;

        if(state) {
            if(this.videoContainerRef.current) {
                this.videoContainerRef.current.requestFullscreen().then(r => {
                    this.setState({isFullscreen: true});
                });
            }
        } else {
            document.exitFullscreen().then(r => {
                this.setState({isFullscreen: false});
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.props.thumbnail && (
                    <img className={"project-video-thumbnail project-video" + (this.state.videoReady ? " hidden" : "")} src={ this.props.thumbnail } alt=""/>
                )}

                <div ref={ this.videoContainerRef }
                    className={"project-video " + (this.state.videoReady ? "" : "hidden ") + this.props.className}>
                    <video ref={this.video}
                        muted={ this.state.muted }
                        loop={ true }
                        autoPlay={ this.autoPlay }
                        playsInline
                        preload="auto"

                        onCanPlay={ this.onCanPlay.bind(this) }
                        onCanPlayThrough={ this.onCanPlayThrough.bind(this) }

                        onPlay={ this.onPlay.bind(this) }
                        onPause={ this.onPause.bind(this) }

                        onClick={ () => {
                            if(this.video.current.paused) {
                                this.video.current.play();
                            } else {
                                this.video.current.pause();
                            }
                        }}
                    >
                        { this.props.sources.map((source, index) => {
                            return <source key={ index } src={ source.src } type={ source.type } />
                        })}
                    </video>

                    <div className="project-video-controls" style={{marginBottom: this.props.parallaxTop && !this.state.isFullscreen ? this.props.parallaxTop : ""}}>
                        { this.state.playing ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "pause-project-video video-control-option " + this.props.pauseClassName }
                                 onClick={ () => this.video.current.pause() }>
                                <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "play-project-video video-control-option " + this.props.playClassName }
                                 onClick={ () => this.video.current.play() }>
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                            </svg>
                        )}
                        { this.state.muted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "unmute-project-video video-control-option " + this.props.unmuteClassName }
                                 onClick={ () => this.setState({muted: false}) }>
                                <path d="M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
                                </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "mute-project-video video-control-option " + this.props.muteClassName }
                                 onClick={ () => this.setState({muted: true}) }>
                                <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/>
                            </svg>
                        )}

                        { this.state.isFullscreen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "exit-fullscreen-project-video video-control-option float-right " + this.props.exitFullscreenClassName }
                                 onClick={ this.ToggleFullscreen.bind(this, false) }>
                                <path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z"/>
                            </svg>
                        ) : (
                            <React.Fragment>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "fullscreen-project-video video-control-option float-right " + this.props.fullscreenClassName }
                                     onClick={ this.ToggleFullscreen.bind(this, true) }>
                                    <path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/>
                                </svg>
                                
                                { this.props.fullyOpened ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "fold-close-project-video video-control-option float-right " + this.props.foldCloseClassName }
                                         onClick={ () => this.props.FoldToggleOpen(false) }>
                                        <path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "fold-open-project-video video-control-option float-right " + this.props.foldOpenClassName }
                                         onClick={ () => this.props.FoldToggleOpen(true) }>
                                        <path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7c-.39-.39-1.02-.39-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 18.17z"/>
                                    </svg>
                                )}
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
InlineVideo.propTypes = {
    thumbnail: PropTypes.string,
    className: PropTypes.string,
    muted: PropTypes.bool,
    sources: PropTypes.array.isRequired,
    pauseClassName: PropTypes.string,
    playClassName: PropTypes.string,
    showOnCanPlay: PropTypes.bool
};
InlineVideo.defaultProps = {
    muted: true,
    showOnCanPlay: true,
    className: "",
    pauseClassName: "",
    playClassName: ""
};
