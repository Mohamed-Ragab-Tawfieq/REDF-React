import React from 'react'

import Filters from '../Filters/Filters.tsx'
import ServicesSettings from '../ServicesSettings/ServicesSettings.tsx'
import Pagination from '../../Pagination/Pagination.tsx'

function Content() {
    return (
        <div className="content">
            <Filters />
            <ServicesSettings />
            <Pagination />
        </div>
    )
}

export default Content