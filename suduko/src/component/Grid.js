import React, { Component } from 'react';
import '../css/Suduko.css';

/**
 * Represents one 3x3 grid of a suduko board.
 */
export default class Grid extends Component {
  render() {
        return (
            <div className="grid">
                <div className="grid-row">
                </div>
            </div>
          );
        }
    }
