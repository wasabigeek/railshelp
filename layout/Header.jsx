import Link from "next/link";

const Header = () => (
  <div className="max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8">
    <div className="relative pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h1 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            <Link href="/">
              <a>rails.help</a>
            </Link>
          </h1>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            The missing GUI for Rails Generators.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
