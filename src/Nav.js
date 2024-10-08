import { Link, Outlet } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/title">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/title">Title</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addproduct">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productsclass">Product Class</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productsfunctional">Product Functional</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usersfunctional">Users Functional</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usersclass">Users Class</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div className="container mt-4">
            <Outlet />
        </div>
    </>);
}

export default Nav;