import React from 'react'

import Filters from '../Filters/Filters.tsx'
import ServicesSettings from '../ServicesSettings/ServicesSettings.tsx'
import Pagination from '../Pagination/Pagination.tsx'
import ReserveSettings from '../ReserveSettings/ReserveSettings.tsx'
import BranchesSettings from '../BranchesSettings/BranchesSettings.tsx'
import BranchDetails from '../BranchDetails/BranchDetails.tsx'
import Breadcrumb from '../Breadcrumbs/Breadcrumb.tsx'

function Content() {
    return (
        <div className="content">
            <Breadcrumb />
            <br />
            <Filters />
            <br />
            <BranchesSettings />
            <br />
            <ReserveSettings />
            <br />
            <ServicesSettings />
            <br />
            <BranchDetails />
            <br />
            <Pagination />
        </div>
    )
}

export default Content