import React from 'react'
import { ViewSelectorItem } from './ViewSelectorItem'

export const ViewSelector = () => {
    return (
        <section className='view-selector-wrapper'>
            <div className='view-selector'>
                <ViewSelectorItem>For you</ViewSelectorItem>
                <ViewSelectorItem>Following</ViewSelectorItem>
            </div>
        </section>
    )
}