import { SET_CURRENT_TIMELINE_VIEW } from "./actionTypes";

export const setCurrentTimelineView = (timelineView) => ({
    type: SET_CURRENT_TIMELINE_VIEW,
    payload: timelineView,
});