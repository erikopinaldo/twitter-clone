import { combineReducers } from 'redux';
import currentTimelineViewReducer from './currentTimelineViewReducers';

const rootReducer = combineReducers({
    currentTimelineView: currentTimelineViewReducer,
});

export default rootReducer;