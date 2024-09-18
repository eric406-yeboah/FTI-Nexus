const Login = () => {
    return
    <>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-900">Login to Your Account</h2>
            
            <form className="space-y-6">
            {/* <!-- Email --> */}
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* <!-- Password --> */}
            <div>
                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* <!-- Submit Button --> */}
            <div>
                <button type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Sign In
                </button>
            </div>

            {/* <!-- Additional Links --> */}
            <div className="text-sm text-center">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
            </div>
            </form>
        </div>
    </>
}

export default Login