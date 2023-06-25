import React, { memo, useEffect } from "react";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import CaptionHeader from "./common/CaptionHeader";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost, updatePost } from "../actions/post";
import {
  IdentificationIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Loader from "./common/Loader";

const AddEditComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const intialPost = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    job: "",
    gender: "",
    company: "",
    salary: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  };

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, [id]);

  const { post, loading } = useSelector((state) => state.post);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: intialPost });

  useEffect(() => {
    if (id) {
      reset({ ...post });
    }
    // else {
    //   reset({ defaultValues: intialPost });
    // }
    // return () => {
    //   reset({ defaultValues: intialPost });
    // };
  }, [post, reset, id]);

  let navigate = useNavigate();
  const onSubmit = (data) => {
    if (id) {
      dispatch(updatePost(data, id, () => navigate("/dashboard")));
    } else {
      dispatch(addPost(data, () => navigate("/dashboard")));
    }
  };
  const handleClickCancel = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <CaptionHeader headerName="Add/Edit" showLinkback={true} />
      {loading && id ? (
        <Loader />
      ) : (
        <main>
          <div className="mx-auto max-w-7xl py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div className="border-b border-gray-900/10 pb-6">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          id="firstname"
                          {...register("firstName", {
                            required: "This field is required",
                            // value: post?.firstName,
                            maxLength: 20,
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.firstName && (
                          <span className="text-red-600 text-xs">
                            {errors.firstName?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastname"
                          {...register("lastName", {
                            required: "This field is required",
                            // value: post?.lastName,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.lastName && (
                          <span className="text-red-600 text-xs">
                            {errors.lastName?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          {...register("email", {
                            required: "This field is required",
                            // value: post?.email,
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

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-1">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          {...register("country", {
                            required: "This field is required",
                            // value: post?.country,
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option value="">select option</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="India">India</option>
                          <option value="Canada">Canada</option>
                          <option value="Mexico">Mexico</option>
                        </select>
                        {errors.country && (
                          <span className="text-red-600 text-xs">
                            {errors.country?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone", {
                            required: "This field is required",
                            //   min: 10,
                            //   max: 10,
                            // minLength: 6,
                            // maxLength: 10,
                            //   valueAsNumber: true,
                            //   pattern: {
                            //     value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            //   },
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.phone && (
                          <span className="text-red-600 text-xs">
                            {errors.phone?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="job"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Job Role
                      </label>
                      <div className="mt-1">
                        <select
                          id="job"
                          autoComplete="country-name"
                          {...register("job", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option value="">select option</option>
                          <option value="Full Stack Developer">
                            Full Stack Developer
                          </option>
                          <option value="Front End Developer">
                            Front End Developer
                          </option>
                          <option value="Back End Developer">
                            Back End Developer
                          </option>
                          <option value="Test Engineer">Test Engineer</option>
                          <option value="UX Designer">UX Designer</option>
                        </select>
                        {errors.job && (
                          <span className="text-red-600 text-xs">
                            {errors.job?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Gender
                      </label>
                      <div className="mt-1">
                        <select
                          id="gender"
                          autoComplete="country-name"
                          {...register("gender", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option value="">select option</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                          <span className="text-red-600 text-xs">
                            {errors.gender?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Company Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="company"
                          {...register("company", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.company && (
                          <span className="text-red-600 text-xs">
                            {errors.company?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="salary"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Salary
                      </label>
                      <div className="mt-1">
                        <input
                          id="salary"
                          {...register("salary", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.salary && (
                          <span className="text-red-600 text-xs">
                            {errors.salary?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="streetaddress"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-1">
                        <input
                          id="streetaddress"
                          {...register("address", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.address && (
                          <span className="text-red-600 text-xs">
                            {errors.address?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          id="city"
                          {...register("city", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && (
                          <span className="text-red-600 text-xs">
                            {errors.city?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-1">
                        <input
                          id="region"
                          {...register("state", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.state && (
                          <span className="text-red-600 text-xs">
                            {errors.state?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postalcode"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          id="postalcode"
                          {...register("pin", {
                            required: "This field is required",
                          })}
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.pin && (
                          <span className="text-red-600 text-xs">
                            {errors.pin?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={handleClickCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save <>&nbsp;</>
                  <PaperAirplaneIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
};

export default memo(AddEditComponent);
