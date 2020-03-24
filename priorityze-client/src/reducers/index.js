import { combineReducers } from 'redux';

import goal from './goal';
import step from './step';
import user from './user';

const rootReducer = () => combineReducers({ goal, step, user })

export default rootReducer