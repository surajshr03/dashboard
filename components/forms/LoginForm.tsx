"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Define the valid credentials for each role
  const validCredentials = {
    admin: {
      email: "admin@test.com",
      password: "admin",
    },
    superadmin: {
      email: "superadmin@test.com",
      password: "superadmin",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Check if the entered credentials match the valid credentials for any role
    const role = Object.keys(validCredentials).find(
      (role) =>
        validCredentials[role].email === email &&
        validCredentials[role].password === password
    );

    if (role) {
      // If valid credentials, store the role in localStorage and redirect to the dashboard
      // localStorage.setItem('role', role);
      router.push(`/dashboard?role=${role}`);
    } else {
      // Show an error message if the credentials are incorrect
      setError("Incorrect email or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-16 md:my-8 max-w-7xl">
      <div className="flex bg-white shadow-xl rounded-2xl">
        <div className="p-6 sm:p-10 flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-4xl text-center font-bold">Login</p>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border max-w-96 border-red-300 text-red-800 px-4 py-3 rounded-xl text-center">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkborder-darkBrand"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkborder-darkBrand"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBrand ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-brand hover:bg-darkBrand"
                }`}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>

        {/* Right-hand side with role information */}
        {/* <div className="flex flex-col justify-center items-center p-6 bg-gray-50 rounded-r-2xl max-w-lg hidden lg:block">
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-4">For admin role choose:</p>
                        <ul className="list-inside mb-6">
                            <li className="mb-2">
                                <strong>Email:</strong> admin@test.com
                            </li>
                            <li className="mb-2">
                                <strong>Password:</strong> admin
                            </li>
                        </ul>

                        <p className="text-lg font-semibold mb-4">For superadmin role choose:</p>
                        <ul className="list-inside">
                            <li className="mb-2">
                                <strong>Email:</strong> superadmin@test.com
                            </li>
                            <li className="mb-2">
                                <strong>Password:</strong> superadmin
                            </li>
                        </ul>
                    </div>
                </div> */}

        <div className="flex justify-center items-center flex-col p-6 bg-gray-100 lg:block ">
          <div className=" flex flex-col text-left">
            <p className="text-lg font-semibold mb-4">For admin role choose:</p>
            <ul className="list-inside mb-6 border-b">
              <li className="mb-2">
                <strong>Email:</strong> admin@test.com
              </li>
              <li className="mb-2">
                <strong>Password:</strong> admin
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4">
              For superadmin role choose:
            </p>
            <ul className="list-inside">
              <li className="mb-2">
                <strong>Email:</strong> superadmin@test.com
              </li>
              <li className="mb-2">
                <strong>Password:</strong> superadmin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
