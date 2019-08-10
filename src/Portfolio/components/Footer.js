import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                Copyright © 2015 - { (new Date()).getFullYear() } Wouter Grutter. All Rights Reserved
            </footer>
        );
    }
}