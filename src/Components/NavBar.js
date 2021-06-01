import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light mt-1">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">API DEMO-2</span>
                    <ul className="nav navbar-nav">
                        <li className="">
                            <a className="p-3 text-decoration-none text-primary" href="#">Home</a>
                            <a className="p-3 text-decoration-none text-primary" href="#">About</a>
                            <a className="p-3 text-decoration-none text-primary" href="#">Contact Us</a>
                            <a className="p-3 text-decoration-none text-primary" href="#">Service</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
