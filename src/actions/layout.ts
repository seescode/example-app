import { Action } from '@ngrx/store';
import { label } from '../util';

export const LayoutActionTypes = {
  OPEN_SIDENAV: label('[Layout] Open Sidenav'),
  CLOSE_SIDENAV: label('[Layout] Close Sidenav')
};


export class OpenSidenav implements Action {
  type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  type = LayoutActionTypes.CLOSE_SIDENAV;
}


export type LayoutActions = OpenSidenav | CloseSidenav;