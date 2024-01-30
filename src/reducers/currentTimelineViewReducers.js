import { SET_CURRENT_TIMELINE_VIEW } from "../actions/actionTypes";

const initialState = "For you"

const currentTimelineViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TIMELINE_VIEW:
            return action.payload;
        default:
            return state;
    }
};

export default currentTimelineViewReducer;