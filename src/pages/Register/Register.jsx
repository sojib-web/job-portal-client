// @ts-nocheck
import React, { use } from "react";
import Lottie from "lottie-react";
import LoginLottie from "../../assets/Animation - 1748251916489.json";
import { AuthContext } from "../../Context/AuthContext";

function Register() {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="max-w-md">
          <Lottie loop={true} animationData={LoginLottie} />
        </div>

        <div className="card w-full max-w-sm bg-white shadow-xl rounded-2xl">
          <div className="card-body px-8 py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
              Register Now
            </h1>

            <form onSubmit={handleRegister}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
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
                  placeholder="••••••••"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm text-blue-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <button className="btn btn-primary w-full mt-2">Register</button>
            </form>

            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a
                href="/signIn"
                className="text-blue-600 font-medium hover:underline"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
