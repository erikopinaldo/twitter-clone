import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentTimelineViewSelected } from './currentTimelineViewSlice'

export const ViewSelectorItem = ({ children }) => {
    const dispatch = useDispatch()

    const currentTimelineView = useSelector(state => state.currentTimelineView)

    const handleViewClick = (view) => {
        dispatch(currentTimelineViewSelected(view))
    }

    const styleOptions = currentTimelineView === children ? 'view-selector-item selected-view' : 'view-selector-item'

    return (
        <div className='view-selector-item-container'>
            <div
                className={styleOptions}
                onClick={(e) => handleViewClick(e.target.textContent)}>
                <span>
                    {children}
                </span>
            </div>
        </div>
    )
}