import Head from "next/head";
import { useState } from "react";
import { useList, useMap } from "react-use";

import FieldInput from "../../components/FieldInput";
import Pill from "../../components/Pill";
import MigrationEditor from "../../components/MigrationEditor";
import CopyButton from "../../components/CopyButton";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

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

const initialMigrationName = "AddExampleColumnsToExampleTable";
export default function MigrationPage() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [migrationData, { set: setMigrationData }] = useMap({
    name: initialMigrationName,
    arguments: [],
  });

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

  const renderEditor = (key, index) => {
    switch (key) {
      case "name":
        return (
          <section aria-labelledby="model_name_editor">
            <MigrationEditor
              initialName={migrationData[key]}
              onChange={(value) => setMigrationData(key, value)}
            />
          </section>
        );
      case "arguments":
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
        <Header />

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto lg:px-8">
            <section className="p-4 bg-gray-100 mt-4 flex justify-center">
              <code className="flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0">
                {/** mt-5 is a hack to mimic items-baseline, not sure why leftIcon messes that up */}
                <span className="ml-2 mt-5">bin/rails g migration</span>
                <Pill
                  heading="migration"
                  text={migrationData.name}
                  onClick={() => setSelectedKey("name")}
                  selected={selectedKey == "name"}
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

          {selectedKey != null && (
            <div className="max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8">
              <div className="bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden">
                {renderEditor(selectedKey)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
