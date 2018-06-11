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
                      <div className="suduko-row">
                          <div className="suduko-box">
                              <Grid x={0} y={0} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={0} y={3} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={0} y={6} type={this.props.type}/>
                          </div>
                      </div>
                      <div className="suduko-row">
                          <div className="suduko-box">
                              <Grid x={3} y={0} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={3} y={3} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={3} y={6} type={this.props.type}/>
                          </div>
                      </div>
                      <div className="suduko-row">
                          <div className="suduko-box">
                              <Grid x={6} y={0} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={6} y={3} type={this.props.type}/>
                          </div>
                          <div className="suduko-box">
                              <Grid x={6} y={6} type={this.props.type}/>
                          </div>
                      </div>
                
              </div>
          )
    }
}
