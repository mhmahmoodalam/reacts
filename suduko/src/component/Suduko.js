import React, { Component } from 'react';
import Grid from './Grid';
import '../css/Suduko.css';

/**
 * Represents a 9x9 suduko board.
 */
export class Suduko extends Component {
    render() {
        return (
            <div>
                <div className="suduko-title">
                    {this.props.title}
                </div>
                <div className="suduko">
                    <div className="suduko-row">
                        <div className="suduko-box">
                            <Grid x={0} y={0} type={this.props.type}/>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
