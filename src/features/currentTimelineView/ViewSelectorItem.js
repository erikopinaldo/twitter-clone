import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentTimelineViewSelected } from './currentTimelineViewSlice'

export const ViewSelectorItem = ({ children }) => {
    const dispatch = useDispatch()

    const currentTimelineView = useSelector(state => state.currentTimelineView)

    const handleViewClick = (view) => {
        dispatch(currentTimelineViewSelected(view))
    }

    const styleOptions = currentTimelineView === children ? 'selected-view' : null

    return (
        <div className='view-selector-item-container'>
            <div
                className='view-selector-item'
                onClick={(e) => handleViewClick(e.target.textContent)}>
                <span>
                    {children}
                </span>
                <div className={styleOptions}></div>
            </div>
        </div>
    )
}