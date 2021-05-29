import { combineReducers } from 'redux';
import { data } from './reducers/data/data';
import { app } from './reducers/app/app';

export const NameSpace = {
  DATA: `data`,
  APP: `app`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
});
