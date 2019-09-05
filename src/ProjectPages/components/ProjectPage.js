import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProjectPage extends React {

    render() {
        let projectTransitionContainerStyle = "img-transition-container";
        if(this.state.projectOverlayTransition)
            projectTransitionContainerStyle += " active";

        const effect = `
            @keyframes project-image-transition {
                0% {
                    top: ` + this.state.position.y + `px;
                    left: ` + this.state.position.x + `px;
                    width: ` + this.state.size.width + `px;
                    height: ` + this.state.size.height + `px;
                }
                100% {
                    top: 40px;
                    left: calc((100% - 95vw) / 2);
                    width: 95vw;
                    height: 65vh;
                }
            }`;

        return (
            <React.Fragment>

                <style children={effect} />

                <div className={projectTransitionContainerStyle} >
                    <div className="img-transition d-inline-block overflow-hidden" style={{backgroundImage: "url(\"" + this.state.imageURL + "\")" }} >
                    </div>

                    <div style="display: inline-block;position: relative;left: 0;margin-top: -1rem;width: calc(95vw - 8%);background-color: white;box-shadow: 0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius: .35rem .35rem 0 0;"A
                        className="card-body">

                        <h2 className="font-weight-bold">
                            <a>Title of the news</a>
                        </h2>

                        <p>Written by <a><strong>Abby Madison</strong></a>, 21/08/2018</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}