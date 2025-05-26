// @ts-nocheck
import React, { useContext } from "react";
import Lottie from "lottie-react";
import LoginLottie from "../../assets/Animation - 1748255523281.json";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        form.reset();
      })
      .catch((err) => {
        console.error("Login failed:", err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="hero-content flex-col lg:flex-row gap-12">
        {/* Lottie Animation */}
        <div className="max-w-md w-full">
          <Lottie animationData={LoginLottie} loop={true} />
        </div>

        {/* Login Form Card */}
        <div className="card w-full max-w-sm bg-white shadow-xl rounded-2xl">
          <div className="card-body px-8 py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
              Sign In Now !
            </h1>

            <form onSubmit={handleSignIn}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Login
              </button>
            </form>

            <p className="text-sm text-center mt-6">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-indigo-600 font-medium hover:underline"
              >
                Register here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
