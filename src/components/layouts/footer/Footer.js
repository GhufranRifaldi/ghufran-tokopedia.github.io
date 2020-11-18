import React, { Component } from 'react'
import 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" class="btn btn-primary btn-sm active">Prev</button>
                <button type="button" class="btn btn-primary btn-sm">List Pokemon</button>
                <button type="button" class="btn btn-primary btn-sm">My Pokemon</button>
                <button type="button" class="btn btn-primary btn-sm">Next</button>
                </div>
            </div>
        )
    }
}
