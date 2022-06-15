import React from 'react'

import Filters from '../Filters/Filters.tsx'
import ServicesSettings from '../ServicesSettings/ServicesSettings.tsx'
import Pagination from '../../Pagination/Pagination.tsx'
import ReserveSettings from '../ReserveSettings/ReserveSettings.tsx'
import BranchesSettings from '../BranchesSettings/BranchesSettings.tsx'

function Content() {
    return (
        <div className="content">
            <BranchesSettings />
        </div>
    )
}

export default Content