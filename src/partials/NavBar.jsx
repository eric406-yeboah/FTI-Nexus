const NavBar = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    
                    {/* Left Section: Logo and Navigation Links */}
                    <div className="flex items-center space-x-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="https://via.placeholder.com/50" alt="Logo" className="h-10 w-10" />
                        <span className="font-bold text-xl text-indigo-800">FTI Nexus</span>
                    </div>
                    
                    {/* Links */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Top Market</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Founded</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Promotion</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
                    </div>
                    </div>

                    {/* Right Section: Buttons and Language Icon */}
                    <div className="flex items-center space-x-6">
                    <a href="/login" className="text-gray-700 hover:text-white px-4 py-2 rounded-lg hover:bg-indigo-800">Log In</a>
                    <a href='/create-account' className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">Register</a>
                    <div className="flex items-center">
                    <select
                        className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Language Switcher"
                    >
                        <option value="en">En</option>
                        <option value="es">De</option>
                        <option value="fr">Fr</option>
                    </select>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;