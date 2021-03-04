import Head from "next/head"
import { useState } from "react"
import { useList } from "react-use";

import FieldInput from "../components/FieldInput"
import Pill from "../components/Pill";


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


export default function Home() {
  const argTypes = {
    MODEL: "model",
    ATTRIBUTE: "attribute",
    ADD_ATTRIBUTE: "add_attribute",
    PARENT: "parent",
  }
  const [args, { updateAt: updateArg, removeAt: removeArg, insertAt: insertArg }] = useList([
    { type: argTypes.MODEL, value: "ExampleModel" },
    { type: argTypes.ATTRIBUTE, value: "other_model:references{polymorphic}:uniq" },
    { type: argTypes.ADD_ATTRIBUTE, value: null }, // hack for + Attribute button
    { type: argTypes.PARENT, value: "" },
  ])
  const [selectedArg, setSelectedArg] = useState(null);
  const [showModelEditor, setShowModelEditor] = useState(false);
  const [showParentEditor, setShowParentEditor] = useState(false);
  const [showCopying, setShowCopying] = useState(false);

  const copyCliCommand = () => {
    const cliCommand = [
      "bin/rails g model",
      ...args.map(a => a.value),
    ].filter(text => !!text).join(" ");
    setShowCopying(true);
    navigator.clipboard.writeText(cliCommand);
    setTimeout(() => setShowCopying(false), 2000);
  }


  const toggleFieldEditor = (fieldIndex) => {
    setShowModelEditor(false);
    setShowParentEditor(false);
    // a bit hacky
    if (selectedArg == null || fieldIndex != selectedArg) {
      setSelectedArg(fieldIndex);
    } else {
      setSelectedArg(null);
    }
  }

  const setFieldFor = (index) => {
    return (value) => updateArg(index, value);
  }

  const addField = (index) => {
    toggleFieldEditor(index);
    insertArg(index, { type: argTypes.ATTRIBUTE, value: "" });
  }

  const removeField = (index) => {
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
              onUpdate={(value) => setFieldFor(selectedArg)({ type: argTypes.ATTRIBUTE, value })}
              onDelete={() => removeField(selectedArg)}
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
        <title>Rails Generators GUI | GuideRails</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8">
          <div className="relative pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h1 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">GuideRails</h1>
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
                <span className="ml-2 mt-5">bin/rails g model</span>
                {
                  args.map((arg, index) => {
                    switch (arg.type) {
                      case argTypes.MODEL:
                        return (
                          <Pill
                            key={index}
                            heading="model"
                            text={arg.value}
                            onClick={() => setSelectedArg(index)}
                            baseColor="yellow"
                          />
                        )
                      case argTypes.ATTRIBUTE:
                        return (
                          <Pill
                            key={index}
                            heading={`attribute ${index - 1}`}
                            text={arg.value}
                            onClick={() => setSelectedArg(index)}
                            baseColor="blue"
                          />
                        )
                      case argTypes.ADD_ATTRIBUTE:
                        return (
                          <Pill
                            key={index}
                            text="+ Attribute"
                            baseColor="gray"
                            borderStyle="dashed"
                            onClick={() => addField(index)}
                            editable={false}
                          />
                        )
                      case argTypes.PARENT:
                        return (
                          <Pill
                            key={index}
                            text={`--parent ${arg.value}`}
                            baseColor={arg.value ? "green" : "gray"}
                            borderStyle={arg.value ? "solid" : "dashed"}
                            onClick={() => setSelectedArg(index)}
                          />
                        )
                    }
                  })
                }
                <Pill
                  text={showCopying ? "Copied!" : "Copy"}
                  baseColor="gray"
                  onClick={copyCliCommand}
                  editable={false}
                  leftIcon={
                    <svg className={`mr-2 h-5 w-5 text-gray-500 inline`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  }
                />
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


      <footer className="w-full flex justify-center items-center h-24 text-gray-500">
        Have a suggestion or found a bug? Open an issue on&nbsp;
        <a
          href="https://github.com/wasabigeek/guiderails/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 py-2 px-3 rounded-lg text-gray-800 border hover:bg-gray-50 flex justify-center items-center"
        >
          <svg
            className="h-5 w-5 hover:bg-gray-50 fill-current text-gray-800"
            viewBox="0 0 136 133" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
          >
            <path d="M67.866.002C30.387.002 0 30.39 0 67.877c0 29.988 19.446 55.425 46.417 64.404 3.396.621 4.633-1.475 4.633-3.275 0-1.608-.058-5.879-.091-11.541-18.88 4.1-22.863-9.1-22.863-9.1-3.087-7.838-7.537-9.925-7.537-9.925-6.163-4.213.466-4.13.466-4.13 6.813.484 10.396 6.996 10.396 6.996 6.054 10.371 15.888 7.375 19.754 5.642.617-4.387 2.367-7.38 4.309-9.075-15.071-1.712-30.917-7.537-30.917-33.546 0-7.408 2.646-13.466 6.988-18.212-.7-1.717-3.03-8.617.662-17.963 0 0 5.7-1.825 18.667 6.959 5.412-1.505 11.22-2.259 16.992-2.284 5.762.025 11.57.78 16.991 2.284 12.959-8.784 18.646-6.959 18.646-6.959 3.704 9.346 1.375 16.246.675 17.963 4.35 4.746 6.98 10.804 6.98 18.212 0 26.075-15.872 31.813-30.992 33.492 2.437 2.096 4.608 6.237 4.608 12.57 0 9.072-.083 16.392-.083 18.617 0 1.817 1.22 3.93 4.666 3.267 26.95-8.996 46.38-34.417 46.38-64.396 0-37.487-30.392-67.875-67.88-67.875" />
          </svg>
          <span className="ml-2">GitHub</span>
        </a>
      </footer>
    </div >
  )
}
