import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

class LocationChangeScrollHandler extends React.Component {

    constructor(props) {
        super(props);

        this.prevScrollPosition = [{location: "/", scroll: 0}];
        this.nextUpdateScroll = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.nextUpdateScroll)
        {
            window.scrollTo(0, this.nextUpdateScroll);
            this.nextUpdateScroll = null;
        }
    }

    handleRouteChangeScroll(history) {
        let prevLocation = "/";
        if(this.prevScrollPosition.length > 0 && this.prevScrollPosition[this.prevScrollPosition.length - 1] !== undefined)
            prevLocation = this.prevScrollPosition[this.prevScrollPosition.length - 1].location;

        if(prevLocation === history.location.pathname) {
            const lastScroll = this.prevScrollPosition.pop();
            this.nextUpdateScroll = lastScroll.scroll;
        } else {
            this.prevScrollPosition.push({location: prevLocation, scroll: document.querySelector("html").scrollTop});
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <LocationChangeScrollHandlerFun {...this.props} handleRouteChangeScroll={ this.handleRouteChangeScroll.bind(this) } />
        );
    }
}

function LocationChangeScrollHandlerFun({ history, handleRouteChangeScroll }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            handleRouteChangeScroll(history)
        });
        return () => {
            unlisten();
        }
    }, [history]);

    return null;
}

export default withRouter(LocationChangeScrollHandler);