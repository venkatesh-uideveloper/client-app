import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const SearchBox = ({ handleClickAddEdit, handleChange, handleSubmit }) => {
  return (
    <div className="mb-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex h-9">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Search"
              onChange={handleChange}
              className="block w-full sm:w-96 rounded-l-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex justify-center rounded-r-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search <>&nbsp;</>{" "}
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>

      <div className="sm:col-span-3 flex justify-end items-end">
        <button
          type="button"
          className="flex w-full sm:w-auto justify-center items-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={handleClickAddEdit}
        >
          <PlusIcon className="h-5 w-5" aria-hidden="true" /> <>&nbsp;</>
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
