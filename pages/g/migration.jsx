import Head from "next/head";
import { useState } from "react";
import { useMap } from "react-use";

import FieldInput from "../../components/FieldInput";
import Pill from "../../components/Pill";
import MigrationEditor from "../../components/MigrationEditor";
import CopyButton from "../../components/CopyButton";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import parseMigrationFormat from "../../helpers/parseMigrationFormat";
import { MIGRATION_FORMATS } from "../../helpers/constants";
import JoinTableEditor from "../../components/JoinTableEditor";
import { Heading } from "../../components/Heading";

const AttributeArguments = ({
  attributes,
  onAppend,
  onSelect,
  selectedIndex,
}) => {
  return (
    <>
      {attributes.map((arg, index) => (
        <Pill
          key={index}
          heading={`attribute ${index}`}
          text={arg}
          onClick={() => onSelect(index)}
          selected={selectedIndex == index}
          baseColor="blue"
        />
      ))}
      <Pill
        text="+ Attribute"
        baseColor="gray"
        borderStyle="dashed"
        onClick={onAppend}
        editable={false}
      />
    </>
  );
};

const JoinTableArguments = ({ args, onSelect, selectedIndex }) => {
  return (
    <>
      <Pill
        text={args[0] || "..."}
        heading={`table 0`}
        onClick={() => onSelect(0)}
        selected={selectedIndex == 0}
        baseColor="blue"
      />
      <Pill
        text={args[1] || "..."}
        heading={`table 1`}
        onClick={() => onSelect(1)}
        baseColor="blue"
        selected={selectedIndex == 1}
      />
    </>
  );
};

const initialMigrationName = "AddExampleColumnsToExampleTable";
const [initialFormat] = parseMigrationFormat(initialMigrationName);

export default function MigrationPage() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [migrationData, { set: setMigrationData }] = useMap({
    format: initialFormat,
    name: initialMigrationName,
    arguments: ["other_model:references"],
  });

  const cliCommand = [
    "bin/rails g migration",
    migrationData.name,
    ...migrationData.arguments,
  ]
    .filter((text) => !!text)
    .join(" ");

  const toggleKey = (key) => {
    if (selectedKey == "name") {
      setSelectedKey(null);
    } else {
      setSelectedKey(key);
    }
  };

  const toggleArg = (index) => {
    if (selectedKey == "arguments" && selectedIndex == index) {
      setSelectedKey(null);
      setSelectedIndex(0);
    } else {
      setSelectedKey("arguments");
      setSelectedIndex(index);
    }
  };

  const setArg = (index, value) => {
    let newArguments = migrationData.arguments.slice();
    newArguments[index] = value;

    setMigrationData("arguments", newArguments);
  };

  const addArg = () => {
    setSelectedIndex(migrationData.arguments.length);
    setSelectedKey("arguments");
    setMigrationData("arguments", migrationData.arguments.concat([""]));
  };

  const deleteArg = (index) => {
    let newArguments = [
      ...migrationData.arguments.slice(0, index),
      ...migrationData.arguments.slice(index + 1),
    ];

    setSelectedKey(null);
    setSelectedIndex(0);
    setMigrationData("arguments", newArguments);
  };

  const handleChangeFormat = (newFormat) => {
    console.log(newFormat);
    switch (newFormat) {
      case MIGRATION_FORMATS.JOIN_TABLE:
        setMigrationData("arguments", ["", ""]);
        break;

      default:
        setMigrationData("arguments", []);
        break;
    }
    setMigrationData("format", newFormat);
  };

  const renderEditor = (key, index) => {
    switch (key) {
      case "name":
        return (
          <section aria-labelledby="model_name_editor">
            <MigrationEditor
              initialName={migrationData.name}
              format={migrationData.format}
              onChangeFormat={handleChangeFormat}
              onChangeName={(name) => setMigrationData("name", name)}
            />
          </section>
        );
      case "arguments":
        if (
          [
            MIGRATION_FORMATS.ADD_COLUMNS,
            MIGRATION_FORMATS.REMOVE_COLUMNS,
          ].includes(migrationData.format)
        ) {
          return (
            <section id="fields" aria-labelledby="attribute_editor">
              <h2 className="text-xl leading-6 font-medium text-gray-900">
                Edit Attribute {selectedIndex}
              </h2>
              <FieldInput
                value={migrationData.arguments[selectedIndex]}
                onUpdate={(value) => setArg(index, value)}
                onDelete={() => deleteArg(index)}
              />
            </section>
          );
        } else {
          return (
            <section
              id="fields"
              aria-labelledby="attribute_editor"
              // workaround to reset the editor, when swapping between table args
              // as it's essentially uncontrolled
              key={selectedIndex}
            >
              <JoinTableEditor
                initialValue={migrationData.arguments[selectedIndex]}
                onUpdate={(value) => setArg(index, value)}
                selectedIndex={selectedIndex}
              />
            </section>
          );
        }
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
        <meta
          property="og:url"
          content="https://wasabigeek.github.io/railshelp/"
        />
        <meta property="og:title" content="Rails Generators GUI | rails.help" />
        <meta
          property="og:description"
          content="Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wasabigeek.github.io/railshelp/"
        />
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
        <Heading title="Migration Generator" />

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto lg:px-8">
            <section className="p-6 bg-gray-100 mt-4 flex justify-center">
              <code className="flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0">
                {/** mt-5 is a hack to mimic items-baseline, not sure why leftIcon messes that up */}
                <span className="ml-2 mt-5">bin/rails g migration</span>
                <Pill
                  heading="migration"
                  text={migrationData.name}
                  onClick={() => toggleKey("name")}
                  selected={selectedKey == "name"}
                  baseColor="yellow"
                />
                {[
                  MIGRATION_FORMATS.ADD_COLUMNS,
                  MIGRATION_FORMATS.REMOVE_COLUMNS,
                ].includes(migrationData.format) ? (
                  <AttributeArguments
                    attributes={migrationData.arguments}
                    onAppend={addArg}
                    onSelect={toggleArg}
                    selectedIndex={
                      selectedKey == "arguments" ? selectedIndex : null
                    }
                  />
                ) : MIGRATION_FORMATS.JOIN_TABLE == migrationData.format ? (
                  <JoinTableArguments
                    args={migrationData.arguments}
                    onSelect={toggleArg}
                    selectedIndex={
                      selectedKey == "arguments" ? selectedIndex : null
                    }
                  />
                ) : null}
                <CopyButton text={cliCommand} />
              </code>
            </section>
          </div>

          {selectedKey != null && (
            <div className="max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8">
              <div className="bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden">
                {renderEditor(selectedKey, selectedIndex)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
