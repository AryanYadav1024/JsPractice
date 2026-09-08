import {Link, NavLink} from 'react-router-dom'
// why link not a because a takes us to another file the whole dom reloads for the new page 
// but in react we don't want that we pass the different components and set up routes 
// based on link the route changes and only the state updates for the components we setup 
// NavLink provides some additional functionalities

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                // why className in callback because we want react to update it based on
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?'text-orange-700':'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='About'
                                // why className in callback because we want react to update it based on this expression
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?'text-orange-700':'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='Contact'
                                // why className in callback because we want react to update it based on this expression
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?'text-orange-700':'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='Github'
                                // why className in callback because we want react to update it based on this expression
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?'text-orange-700':'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

