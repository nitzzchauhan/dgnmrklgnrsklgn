import { Link , Outlet } from 'react-router-dom'


function Products() {
    return (
        <div>
            <Link to='123' style={{ marginRight: '10px' }}>
                Product 123
            </Link>
            <Link to='456' style={{ marginRight: '10px' }}>
                Product 123
            </Link>
            <Link to='789' style={{ marginRight: '10px' }}>
                Product 123
            </Link>

            <Outlet />

        </div>
    )
}

export default Products