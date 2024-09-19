import React from 'react';

const CreateAccount = () => {
  return (
  <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-md shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
        {/* <div className="flex justify-center mb-6">
          {}
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div> */}
        
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="First name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Last name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="+1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Re-type Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Re-type Password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              I agree with FTI Nexus Privacy & Terms Use
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-900 transition duration-300"
          >
            Register
          </button>

          <div className="text-center my-4">OR</div>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In here
            </a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateAccount;
