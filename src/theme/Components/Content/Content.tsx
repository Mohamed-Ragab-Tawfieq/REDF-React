import React from 'react'

import Filters from '../Filters/Filters.tsx'
import ServicesSettings from '../ServicesSettings/ServicesSettings.tsx'
import Pagination from '../../Pagination/Pagination.tsx'
import ReserveSettings from '../ReserveSettings/ReserveSettings.tsx'

function Content() {
    return (
        <div className="content">
            <ReserveSettings />
        </div>
    )
}

export default Content