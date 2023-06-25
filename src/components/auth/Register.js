import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    // if (typeof data === "object" && !Array.isArray(data) && data !== null) {}
    // console.log(data);
    dispatch(registerUser(data));
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="main-wrapper">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 box-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  {...register("name", {
                    required: "This field is required",
                  })}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <span className="text-red-600 text-xs">
                    {errors.name?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div> */}
              </div>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: 4,
                  })}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <span className="text-red-600 text-xs">
                    {errors.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("password2", {
                    required: "This field is required",
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  })}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password2 && (
                  <span className="text-red-600 text-xs">
                    {errors.password2?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
