import React from "react";

export default function ContentContainer(props) {
    const classes = "page-content-container w-100 " + props.className;
    return (
        <section id={ props.id } className={ classes }>
            <div className="inner-page-content">
                <h3 className="inner-page-content-title pb-2">{ props.contentTitle }</h3>
                { props.children }
            </div>
        </section>
    );
}