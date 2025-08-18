import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Left */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 max-w-xl pr-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4"><span className="text-orange-500">Arada</span>Buy</h1>
        <p className="text-xl text-gray-600 mb-2">Your style, your way.</p>
        <p className="text-gray-500 text-center">
          Join our community of style enthusiasts and discover unique pieces that express your personality
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome back</h2>
        <p className="text-gray-500 text-sm mb-6">Sign in to your account to continue</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CE542C] focus:border-[#CE542C] outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CE542C] focus:border-[#CE542C] outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-[#a53e1e] transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-[#CE542C] hover:underline">
              Sign up
            </Link>
          </p>
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-400 text-xs">or</span>
              </div>
            </div>
            <Link 
              to="/" 
              className="mt-4 inline-block text-sm text-gray-500 hover:text-[#CE542C]"
            >
              Continue as guest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;