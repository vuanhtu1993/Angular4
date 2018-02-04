import {Action} from '@ngrx/store';

export const AMOUNTCHANGE = '[Amount] Change';

// we will also need an action, to report, that the amount was changed by the user.
export class AmountChangeAction implements Action {
  type = AMOUNTCHANGE;

  constructor(public payload: number) {

  }
}
