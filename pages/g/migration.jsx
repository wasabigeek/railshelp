import Head from "next/head";
import { useState } from "react";
import { useList } from "react-use";

import FieldInput from "../../components/FieldInput";
import Pill from "../../components/Pill";
import MigrationEditor from "../../components/MigrationEditor";
import CopyButton from "../../components/CopyButton";

const ParentEditor = ({ value, onChange }) => (
  <div>
    <h2 className="text-xl leading-6 font-medium text-gray-900">
      Edit Parent Model
    </h2>
    <p>
      The is the optional superclass of the created model, used for Single Table
      Inheritance models.
    </p>
    <div className="mt-4">
      <label
        htmlFor="model-name-input"
        className="block font-medium text-gray-700"
      >
        Name
      </label>
      <aside className="text-sm text-gray-500">
        CamelCased or under_scored
      </aside>
      <input
        id="model-name-input"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="ModelName"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

const ArgButton = ({ arg, index, selectedArg, setSelectedArg, insertArg }) => {
  const toggleSelectedArg = (index) => {
    if (selectedArg == index) {
      setSelectedArg(null);
    } else {
      setSelectedArg(index);
    }
  };

  const insertAndToggleArg = (index) => {
    setSelectedArg(index);
    insertArg(index, { type: argTypes.ATTRIBUTE, value: "" });
  };

  switch (arg.type) {
    case argTypes.ATTRIBUTE:
      return (
        <Pill
          heading={`attribute ${index - 1}`}
          text={arg.value}
          onClick={() => toggleSelectedArg(index)}
          selected={selectedArg === index}
          baseColor="blue"
        />
      );
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
      );
  }
};

const argTypes = {
  MIGRATION: "migration",
  ATTRIBUTE: "attribute",
  ADD_ATTRIBUTE: "add_attribute",
};

const initialMigrationName = "AddColumnToTable";
export default function MigrationPage() {
  const [name, setName] = useState(initialMigrationName);

  const [
    args,
    { updateAt: updateArg, removeAt: removeArg, insertAt: insertArg },
  ] = useList([
    {
      type: argTypes.ATTRIBUTE,
      value: "other_model:references{polymorphic}:uniq",
    },
    { type: argTypes.ADD_ATTRIBUTE, value: null }, // hack for + Attribute button
  ]);
  const [selectedArg, setSelectedArg] = useState(null);

  const cliCommand = ["bin/rails g migration", ...args.map((a) => a.value)]
    .filter((text) => !!text)
    .join(" ");

  const deleteArg = (index) => {
    setSelectedArg(null);
    removeArg(index);
  };

  const renderEditor = (selectedArg) => {
    switch (args[selectedArg].type) {
      case argTypes.MIGRATION:
        return (
          <section aria-labelledby="model_name_editor">
            <MigrationEditor
              value={args[selectedArg].value}
              onChange={(value) =>
                updateArg(selectedArg, { type: argTypes.MIGRATION, value })
              }
            />
          </section>
        );
      case argTypes.ATTRIBUTE:
        return (
          <section id="fields" aria-labelledby="attribute_editor">
            <h2 className="text-xl leading-6 font-medium text-gray-900">
              Edit Attribute {selectedArg - 1}
            </h2>
            <FieldInput
              value={args[selectedArg].value}
              onUpdate={(value) =>
                updateArg(selectedArg, { type: argTypes.ATTRIBUTE, value })
              }
              onDelete={() => deleteArg(selectedArg)}
            />
          </section>
        );
    }
  };

  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Rails Migration Generator GUI | rails.help</title>
        <meta name="title" content="Rails Generators GUI | rails.help" />
        <meta
          name="description"
          content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rails.help/" />
        <meta property="og:title" content="Rails Generators GUI | rails.help" />
        <meta
          property="og:description"
          content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rails.help/" />
        <meta
          property="twitter:title"
          content="Rails Generators GUI | rails.help"
        />
        <meta
          property="twitter:description"
          content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8">
          <div className="relative pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h1 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  rails.help
                </h1>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  The missing GUI for Rails Generators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto lg:px-8">
            <section className="p-4 bg-gray-100 mt-4 flex justify-center">
              <code className="flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0">
                {/** mt-5 is a hack to mimic items-baseline, not sure why leftIcon messes that up */}
                <span className="ml-2 mt-5">bin/rails g migration</span>
                <Pill
                  heading="migration"
                  text={name}
                  onClick={console.log}
                  selected={null}
                  baseColor="yellow"
                />
                {args.map((arg, index) => (
                  <ArgButton
                    key={index}
                    arg={arg}
                    selectedArg={selectedArg}
                    // TODO: possibly refactor to onSelect / onClear
                    index={index}
                    setSelectedArg={setSelectedArg}
                    insertArg={insertArg}
                  />
                ))}
                <CopyButton text={cliCommand} />
              </code>
            </section>
          </div>

          {selectedArg != null && (
            <div className="max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8">
              <div className="bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden">
                {renderEditor(selectedArg)}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full flex flex-col sm:flex-row justify-center items-center md:h-24 text-gray-500 pt-4 px-2">
        <span className="hidden sm:inline sm:mr-2">
          Have a suggestion or found a bug? Open an issue on&nbsp;
        </span>
        <a
          href="https://github.com/wasabigeek/railshelp/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded-lg text-gray-800 border hover:bg-gray-50 flex justify-center items-center"
        >
          <svg
            className="h-5 w-5 hover:bg-gray-50 fill-current text-gray-800"
            viewBox="0 0 136 133"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <path d="M67.866.002C30.387.002 0 30.39 0 67.877c0 29.988 19.446 55.425 46.417 64.404 3.396.621 4.633-1.475 4.633-3.275 0-1.608-.058-5.879-.091-11.541-18.88 4.1-22.863-9.1-22.863-9.1-3.087-7.838-7.537-9.925-7.537-9.925-6.163-4.213.466-4.13.466-4.13 6.813.484 10.396 6.996 10.396 6.996 6.054 10.371 15.888 7.375 19.754 5.642.617-4.387 2.367-7.38 4.309-9.075-15.071-1.712-30.917-7.537-30.917-33.546 0-7.408 2.646-13.466 6.988-18.212-.7-1.717-3.03-8.617.662-17.963 0 0 5.7-1.825 18.667 6.959 5.412-1.505 11.22-2.259 16.992-2.284 5.762.025 11.57.78 16.991 2.284 12.959-8.784 18.646-6.959 18.646-6.959 3.704 9.346 1.375 16.246.675 17.963 4.35 4.746 6.98 10.804 6.98 18.212 0 26.075-15.872 31.813-30.992 33.492 2.437 2.096 4.608 6.237 4.608 12.57 0 9.072-.083 16.392-.083 18.617 0 1.817 1.22 3.93 4.666 3.267 26.95-8.996 46.38-34.417 46.38-64.396 0-37.487-30.392-67.875-67.88-67.875" />
          </svg>
          <span className="ml-2">GitHub</span>
        </a>
      </footer>
    </div>
  );
}
