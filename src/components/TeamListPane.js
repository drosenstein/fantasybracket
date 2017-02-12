'use strict';


import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/bracketActions.js';

require('styles//BracketPane.css');

//
//  Container component to show a list of teams
//

class TeamListPane extends React.Component {

  /**
   * Render a list of TeamPane objects based on props.team
   */
  render() {
    return (
      <div>
        { this.props.teams.map( ( team, index ) => ( <TeamPane onClick={ () => { this.props.onTeamClicked( team );  }} team={team} key={index} selected={ this.props.selected === team.name } />) ) }
      </div>
    );
  }
}


//
// Presentation component for a teams
//
class TeamPane extends React.Component {

  render() {
    var styleName = this.props.selected ? 'teampane-selected' : 'teampane-unselected';
    return ( <div className={styleName} onClick={this.props.onClick}>{this.props.team.name}</div> );
  }
}



TeamListPane.displayName = 'TeamListPane';

// Uncomment properties you need
// BracketPaneComponent.propTypes = {};
// BracketPaneComponent.defaultProps = {};

const mapStateToProps = state => { return {
  teams: state.teams,
  selected: state.selected
} }

const mapDispatchToProps = dispatch => ({
    onTeamClicked: ( team ) => {
      dispatch( actions.teamClicked( team ) );
    }
 })

export default connect( mapStateToProps, mapDispatchToProps )(TeamListPane);
