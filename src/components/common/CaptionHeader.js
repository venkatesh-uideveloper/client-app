import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CaptionHeader = ({ headerName, showLinkback }) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          className={`${
            showLinkback && "flex items-center"
          } text-3xl font-bold tracking-tight text-gray-900`}
        >
          {showLinkback && (
            <>
              <Link to="/dashboard">
                <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
              &nbsp;
            </>
          )}
          {headerName}
        </h1>
      </div>
    </header>
  );
};

export default CaptionHeader;
