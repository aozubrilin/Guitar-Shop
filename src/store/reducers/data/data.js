import { extend } from '../../../utils/utils';
import { ActionType } from '../../actions';

const initialState = {
  guitars: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return extend(state, {
        guitars: action.payload,
      });
    default:
      return state;
  }
};

export { data };
