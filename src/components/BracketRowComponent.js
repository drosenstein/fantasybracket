'use strict';

import React from 'react';
import {connect} from 'react-redux';

require('styles//BracketPane.css');

class BracketRowComponent extends React.Component {

  render() {

    var divStyle = { height: '100%' };

    if( this.props.selected ) {
      return (
        <div style={ divStyle } className="bracketpane-component" >
          {this.props.selected.name}
        </div>
      );
    }

    return( <div style={ divStyle } className='bracketpane-component'>Select a team</div>);
  }
}

BracketRowComponent.displayName = 'BracketRowComponent';

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
