import React, { Component } from 'react';
import 'styled-components';

export default class navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <img src="https://ecs7.tokopedia.net/assets-about-frontend/master/img/Tokopedia_Mascot-36c1015eabb66a26893edeb227db71e0.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"></img>
                        Tokopedia
                    </a>
                </nav>
           
        )
    }
}

