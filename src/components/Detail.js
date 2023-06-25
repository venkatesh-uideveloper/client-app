import React, { memo, useEffect } from "react";
import CaptionHeader from "./common/CaptionHeader";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../actions/post";
import Loader from "./common/Loader";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id));
  }, [getPost, id]);

  const { post, loading } = useSelector((state) => state.post);

  // if (loading || post === null) {
  //   return <Loader />;
  // }
  return (
    <>
      <CaptionHeader headerName="Detail" showLinkback={true} />
      {loading || post === null ? (
        <Loader />
      ) : (
        <main>
          <div className="mx-auto max-w-7xl py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
            <div className="flex px-4 sm:px-0">
              {/* <img
              className="h-14 w-14 flex-none rounded-full bg-gray-50"
              src={
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt=""
            /> */}
              <UserCircleIcon className="h-14 w-14" aria-hidden="true" />
              <div className="px-4">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Personal details and application.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.firstName} {post.lastName}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Organization
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.company}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Job Role
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.job}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.gender}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.phone}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Salary expectation
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.salary}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {post.address},<br />
                    {post.city},<br />
                    {post.state},<br />
                    {post.country},<br />
                    {post.pin}.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default memo(Detail);
