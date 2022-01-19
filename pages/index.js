import Head from "next/head"
import { useState } from "react"
import { useList } from "react-use";
import Link from 'next/link'

import FieldInput from "../components/FieldInput"
import Pill from "../components/Pill";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const ModelEditor = ({ value, onChange }) => (
  <div>
    <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Model</h2>
    <div className="mt-4">
      <label htmlFor="model-name-input" className="block font-medium text-gray-700">Name</label>
      <aside className="text-sm text-gray-500">CamelCased or under_scored</aside>
      <input
        id="model-name-input"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="ModelName"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
)

const ParentEditor = ({ value, onChange }) => (
  <div>
    <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Parent Model</h2>
    <p>
      The is the optional superclass of the created model, used for Single Table Inheritance models.
    </p>
    <div className="mt-4">
      <label htmlFor="model-name-input" className="block font-medium text-gray-700">Name</label>
      <aside className="text-sm text-gray-500">CamelCased or under_scored</aside>
      <input
        id="model-name-input"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="ModelName"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
)

const ArgButton = ({ arg, index, selectedArg, setSelectedArg, insertArg }) => {
  const toggleSelectedArg = (index) => {
    if (selectedArg == index) {
      setSelectedArg(null);
    } else {
      setSelectedArg(index);
    }
  }

  const insertAndToggleArg = (index) => {
    setSelectedArg(index);
    insertArg(index, { type: argTypes.ATTRIBUTE, value: "" });
  }

  switch (arg.type) {
    case argTypes.MODEL:
      return (
        <Pill
          heading="model"
          text={arg.value}
          onClick={() => toggleSelectedArg(index)}
          selected={selectedArg === index}
          baseColor="yellow"
        />
      )
    case argTypes.ATTRIBUTE:
      return (
        <Pill
          heading={`attribute ${index - 1}`}
          text={arg.value}
          onClick={() => toggleSelectedArg(index)}
          selected={selectedArg === index}
          baseColor="blue"
        />
      )
    // this one is less like the others >_<
    case argTypes.ADD_ATTRIBUTE:
      return (
        <Pill
          text="+ Attribute"
          baseColor="gray"
          borderStyle="dashed"
          onClick={() => insertAndToggleArg(index)}
          editable={false}
        />
      )
    case argTypes.PARENT:
      return (
        <Pill
          text={`--parent ${arg.value}`}
          baseColor={arg.value ? "green" : "gray"}
          borderStyle={arg.value ? "solid" : "dashed"}
          selected={selectedArg === index}
          onClick={() => toggleSelectedArg(index)}
        />
      )
  }
}

const argTypes = {
  MODEL: "model",
  ATTRIBUTE: "attribute",
  ADD_ATTRIBUTE: "add_attribute",
  PARENT: "parent",
}

export default function Home() {
  const [args, { updateAt: updateArg, removeAt: removeArg, insertAt: insertArg }] = useList([
    { type: argTypes.MODEL, value: "ExampleModel" },
    { type: argTypes.ATTRIBUTE, value: "other_model:references{polymorphic}:uniq" },
    { type: argTypes.ADD_ATTRIBUTE, value: null }, // hack for + Attribute button
    { type: argTypes.PARENT, value: "" },
  ])
  const [selectedArg, setSelectedArg] = useState(null);

  const cliCommand = [
    "bin/rails g model",
    ...args.map(a => a.value),
  ].filter(text => !!text).join(" ");

  const deleteArg = (index) => {
    setSelectedArg(null);
    removeArg(index);
  }

  const renderEditor = (selectedArg) => {
    switch (args[selectedArg].type) {
      case argTypes.MODEL:
        return (
          <section aria-labelledby="model_name_editor">
            <ModelEditor value={args[selectedArg].value} onChange={(value) => updateArg(selectedArg, { type: argTypes.MODEL, value })} />
          </section>
        )
      case argTypes.ATTRIBUTE:
        return (
          <section id="fields" aria-labelledby="attribute_editor">
            <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Attribute {selectedArg - 1}</h2>
            <FieldInput
              value={args[selectedArg].value}
              onUpdate={(value) => updateArg(selectedArg, { type: argTypes.ATTRIBUTE, value })}
              onDelete={() => deleteArg(selectedArg)}
            />
          </section>
        )
      case argTypes.PARENT:
        return (
          <section id="fields" aria-labelledby="attribute_editor">
            <ParentEditor value={args[selectedArg].value} onChange={(value) => updateArg(selectedArg, { type: argTypes.PARENT, value })} />
          </section>
        )
    }
  }

  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Rails Generators GUI | rails.help</title>
        <meta name="title" content="Rails Generators GUI | rails.help" />
        <meta name="description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rails.help/" />
        <meta property="og:title" content="Rails Generators GUI | rails.help" />
        <meta property="og:description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rails.help/" />
        <meta property="twitter:title" content="Rails Generators GUI | rails.help" />
        <meta property="twitter:description" content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!" />

        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Inter font for tailwindcss --> */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <Header />
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
