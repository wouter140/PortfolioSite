import React, { Component } from "react";
import YouTube from "react-youtube";

export default class InlineYouTubeVideo extends Component {
    state = {
        videoReady: false
    };

    render() {
        return (
            <div className={"project-video" + (this.state.videoReady ? "" : " hidden")} style={{zIndex: -1, marginTop: (this.props.height / 2) - ((this.props.width / (this.props.videoRatio || 16/9)) / 2)}}>
                <YouTube
                    videoId={ this.props.videoID }
                    opts={{
                        height: this.props.width / (this.props.videoRatio || 16/9),
                        width: this.props.width,
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                            autoplay: 1,
                            controls: 0,
                            loop: 1,
                            playlist: this.props.videoID,
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
        );
    }
}
