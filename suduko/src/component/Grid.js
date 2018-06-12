import React, { Component } from 'react';
import '../css/Suduko.css';
import { CellContainer } from '../container/CellContainer';

/**
 * Represents one 3x3 grid of a suduko board.
 */
 export default class Grid extends Component {
     render() {
         return (
             <div className="d-flex flex-column justify-content-start">
                 <div className="grid-row">
                     <CellContainer x={this.props.x} y={this.props.y} type={this.props.type}/>
                     <CellContainer x={this.props.x} y={1 + this.props.y} type={this.props.type}/>
                     <CellContainer x={this.props.x} y={2 + this.props.y} type={this.props.type}/>
                 </div>
                 <div className="grid-row">
                     <CellContainer x={1 + this.props.x} y={this.props.y} type={this.props.type}/>
                     <CellContainer x={1 + this.props.x} y={1 + this.props.y} type={this.props.type}/>
                     <CellContainer x={1 + this.props.x} y={2 + this.props.y} type={this.props.type}/>
                 </div>
                 <div className="grid-row">
                     <CellContainer x={2 + this.props.x} y={this.props.y} type={this.props.type}/>
                     <CellContainer x={2 + this.props.x} y={1 + this.props.y} type={this.props.type}/>
                     <CellContainer x={2 + this.props.x} y={2 + this.props.y} type={this.props.type}/>
                 </div>
             </div>
         )
     }
 }
