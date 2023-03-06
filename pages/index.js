import Head from "next/head"
import Link from 'next/link'

import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Rails Generators GUI | rails.help</title>
        <meta name="title" content="Rails Generators GUI | rails.help" />
        <meta name="description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wasabigeek.github.io/railshelp/" />
        <meta property="og:title" content="Rails Generators GUI | rails.help" />
        <meta property="og:description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wasabigeek.github.io/railshelp/" />
        <meta property="twitter:title" content="Rails Generators GUI | rails.help" />
        <meta property="twitter:description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Inter font for tailwindcss --> */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8">
          <div className="relative pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h1 className="text-base font-semibold tracking-wider text-gray-600 uppercase">
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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="flex-1 min-w-0">
                <Link href="/g/model">
                  <a className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    <p className="text-lg font-medium text-gray-900">
                      Model Generator
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      bin/rails generate model
                    </p>
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="flex-1 min-w-0">
                <Link href="/g/migration">
                  <a className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    <p className="text-lg font-medium text-gray-900">
                      Migration Generator
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      bin/rails generate migration
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div >
  )
}
