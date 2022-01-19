import Link from "next/link";

const Header = () => (
  <div className="max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8">
    <div className="relative pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h1 className="text-base font-semibold tracking-wider text-gray-600 uppercase">
            <Link href="/">
              <a>rails.help</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
