'use strict';

import * as actions from '../actions/bracketActions';
export function bracketReducer( state = { callCount: 0, text: '' }, action ) {

    switch( action.type )
    {
      case actions.ECHO:
        return Object.assign({}, state, { callCount: state.callCount + 1, teams: [ ...state.teams, { 'name': action.text + ' ' + state.callCount } ] } );
      case 'SELECT':
        return state;
      case 'DESELECT':
        return state;
      case actions.TEAM_CLICK:
          return Object.assign( {}, state, { selected: action.team });
      default:
        console.error( 'unknown action type: ', action );
        return state;
    }
}
