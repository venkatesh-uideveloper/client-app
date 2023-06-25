import React, { memo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../../actions/post";

const ListViewComponent = ({
  handleClickViewDetail,
  handleClickAddEdit,
  handleClickDelete,
  handlePreviousPage,
  handleNextPage,
  posts,
  data,
  limit,
  pageNumber,
  pagination,
}) => {
  if (posts.length === 0) {
    return <p>No Data Found</p>;
  }

  return (
    <>
      <ul className="divide-y divide-gray-100">
        {posts?.length > 0 &&
          posts?.map((post) => (
            <li key={post._id} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                {post.imageUrl ? (
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={post.imageUrl}
                    alt=""
                  />
                ) : (
                  <UserCircleIcon className="h-12 w-12" aria-hidden="true" />
                )}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {post.firstName} {post.lastName}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {post.email}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {post.phone}
                  </p>
                </div>
              </div>

              <div className="sm:flex sm:flex-row sm:items-end">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  onClick={() => handleClickViewDetail(post._id)}
                >
                  View
                </button>
                &emsp;
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => handleClickAddEdit(post._id)}
                >
                  Edit
                </button>
                &emsp;
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => handleClickDelete(post._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
      {pagination && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between items-center">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled={pageNumber === 0}
              onClick={handlePreviousPage}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              Previous
            </button>
            <div className="hidden sm:flex">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{pageNumber + 1}</span> to{" "}
                <span className="font-medium">{limit}</span> of{" "}
                <span className="font-medium">{data?.totalPosts}</span> results
              </p>
            </div>
            <button
              type="button"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              onClick={handleNextPage}
              disabled={pageNumber >= Math.ceil(data?.totalPosts / limit) - 1}
            >
              Next
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageNumber + 1}</span> to{" "}
              <span className="font-medium">{limit}</span> of{" "}
              <span className="font-medium">{data?.totalPosts}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={pageNumber === 0}
                onClick={handlePreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={handleNextPage}
                disabled={pageNumber >= Math.ceil(data?.totalPosts / limit) - 1}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default memo(ListViewComponent);
