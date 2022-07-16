import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export const Heading = ({ title }) => {
  return (
    <div className="mx-auto max-w-md px-6 text-center sm:px-6 sm:max-w-3xl lg:px-20 lg:max-w-7xl">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <Link href="/">
            <a className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ChevronLeftIcon
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Back
            </a>
          </Link>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link href="/">
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500"
                >
                  {title}
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
