'use strict';


export const SELECT = 'SELECT';

export const ECHO = 'ECHO';

export const TEAM_CLICK = 'TEAM_CLICK';

export const selectItem = () => {
    return {
      type: 'SELECT'
    };
 };

export const deselectItem = () => {
  return {
    type: 'DESELECT'
  };
};


export const teamClicked = ( team ) => {
  return {
    type: TEAM_CLICK,
    team: team
  }
};
