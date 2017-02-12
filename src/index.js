import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BracketPaneComponent from 'components/BracketPaneComponent';
import * as reducers from './reducers/bracketReducer';


/**
 * Teams to be used for test data - culled from ECAC Hockey tournament
 *
 * @type {Array}
 */
const ecac = [
      {
        'name': 'Clarkson',
        'mascot': 'Golden Kights'
      },
      {
        'name': 'Rensselaer',
        'mascot': 'Engineers'
      },
      {
        'name': 'Cornell',
        'mascot': 'Big Red'
      },
      {
        'name': 'Union',
        'mascot': 'Dutchmen'
      },
      {
        'name': 'Brown',
        'mascot': 'Bears'
      },
      {
        'name': 'Colgate',
        'mascot': 'Raiders'
      },
      {
        'name': 'Dartmouth',
        'mascot': 'Big Green'
      },
      {
        'name': 'Harvard',
        'mascot': 'Crimson'
      },
      {
        'name': 'Princeton',
        'mascot': 'Tigers'
      },
      {
        'name': 'Quinnipiac',
        'mascot': 'Bobcats'
      },
      {
        'name': 'St Lawrence',
        'mascot': 'Saints'
      },
      {
        'name': 'Yale',
        'mascot': 'Bulldogs'
      }

    ];


var initialState = {
  'teams': ecac.sort( function( x, y ) { if(x.name.toUpperCase() < y.name.toUpperCase() ) { return -1; } else { return 1; } } ),
  'callCount': 0,
  'selected': ''
};

//
// Create the redux store
//
const store = createStore( reducers.bracketReducer, initialState );



// Render the main component into the dom
ReactDOM.render(<Provider store={store}><BracketPaneComponent /></Provider>, document.getElementById('app'));
