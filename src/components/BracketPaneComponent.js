'use strict';

import React from 'react';
import BracketRowComponent from './BracketRowComponent.js';
import TeamListPane from './TeamListPane.js';

require('styles//BracketPane.css');

class BracketPaneComponent extends React.Component {


  render() {
    return (

      <table>
        <tbody>
          <tr>
            <td><TeamListPane /></td>
            <td>
              <div className='bracketpane-component'>
                <BracketRowComponent team={this.props.teams} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    );
  }
}

BracketPaneComponent.displayName = 'BracketPaneComponent';

// Uncomment properties you need
// BracketPaneComponent.propTypes = {};
// BracketPaneComponent.defaultProps = {};

export default BracketPaneComponent;
