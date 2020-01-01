import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InlineVideo extends Component {

    constructor(props) {
        super(props);

        this.video = React.createRef()
    }

    state = {
        videoReady: false,
        playing: false,
        muted: this.props.muted
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

    render() {
        return (
            <React.Fragment>
                { this.props.thumbnail && (
                    <img className={"project-video-thumbnail project-video" + (this.state.videoReady ? " hidden" : "")} src={ this.props.thumbnail } alt=""/>
                )}

                <div className={"project-video " + (this.state.videoReady ? "" : "hidden ") + this.props.className}>
                    <video ref={this.video}
                        muted={ this.state.muted }
                        loop={ true }

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
                        { this.props.sources.map((source) => {
                            return <source src={ source.src } type={ source.type } />
                        })}
                    </video>

                    <div className="project-video-controls">
                        { this.state.playing ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "pause-project-video " + this.props.pauseClassName }
                                 onClick={ () => this.video.current.pause() }>
                                <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "play-project-video " + this.props.playClassName }
                                 onClick={ () => this.video.current.play() }>
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                            </svg>
                        )}
                        { this.state.muted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "unmute-project-video " + this.props.unmuteClassName }
                                 onClick={ () => this.setState({muted: false}) }>
                                <path d="M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
                                </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={ "mute-project-video " + this.props.muteClassName }
                                 onClick={ () => this.setState({muted: true}) }>
                                <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/>
                            </svg>
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
