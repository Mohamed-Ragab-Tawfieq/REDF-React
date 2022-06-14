import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to="/">
                        <span aria-hidden="true">&lsaquo;</span>
                    </Link>
                </li>
                <li className="page-item"><Link className="page-link active" to="/">1</Link></li>
                <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                <li className="page-item">
                    <Link className="page-link" to="/">
                        <span aria-hidden="true">&rsaquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination