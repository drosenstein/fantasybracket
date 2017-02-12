'use strict';

import React from 'react';
import {connect} from 'react-redux';

require('styles//BracketPane.css');

/**
 * Component showing details for a team in the main panel
 *
 */
class BracketRowComponent extends React.Component {

  render() {

    var divStyle = { 'height': '100%' };

    if( this.props.selected ) {
      return (
        <div style={ divStyle } className="bracketpane-component" >
          Team Name: {this.props.selected.name}<br/>
          Team Mascot: {this.props.selected.mascot}<br/>
        </div>
      );
    }

    return( <div style={ divStyle } className='bracketpane-component'>Select a team</div>);
  }
}

BracketRowComponent.displayName = 'BracketRowComponent';

/**
 * Demonstration on using mapStateToProps function - any item called out
 * here will be copied from the store to the props when there is a dispatch
 *
 * Here we are listening just to the selection change so we know to re-render
 * the team details panel with the new selection
 *
 */
const mapStateToProps = state => ({
  selected: state.selected
})

//const mapDispatchToProps = dispatch => ({
//  //
// })

const mapDispatchToProps = ( ) => ({
 //
})



export default connect( mapStateToProps, mapDispatchToProps )(BracketRowComponent);
