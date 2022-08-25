import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const EditClick = () => {
        navigate("/edit");
    };
    const HomeClick = () => {
        navigate("/")
    }

    return (
        <nav className="sticky top-0 z-50 navbar navbar-expand-lg py-2 bg-white relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                        <li className="nav-item mb-2 lg:mb-0">
                            <button
                                type="button"
                                onClick={HomeClick}
                                className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                Home
                            </button>
                        </li>
                        <li className="nav-item mb-2 lg:mb-0">
                            <button
                                type="button"
                                onClick={EditClick}
                                className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                New
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;