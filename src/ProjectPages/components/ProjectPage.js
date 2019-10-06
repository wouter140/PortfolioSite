import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class ProjectPage extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div style={{minHeight: "100vh"}}>
                    <div className="img-transition d-inline-block overflow-hidden"
                         style={{backgroundImage: "url(\"" + this.props.imageURL + "\")",
                             height: "70vh",
                             width: "95%",
                             left: "2.5%",
                             backgroundSize: "cover",
                             backgroundRepeat: "no-repeat",
                             backgroundPosition: "center",
                             position: "fixed",
                             borderRadius: "0 0 .35rem .35rem",
                             boxShadow: "0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)"}}
                    />
                    <div className="card-body text-center card-body-cascade"
                         style={{
                            display: "inline-block",
                            position: "relative",
                            top: "67vh",
                            left: "5%",
                            width: "90%",
                            minHeight: "33vh",
                            backgroundColor: "white",
                            boxShadow: "0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)",

                        }}
                    >
                        <h2 className="font-weight-bold">
                            <a>{ this.props.title }</a>
                        </h2>

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