import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import FieldInput from '../components/FieldInput'
import Pill from '../components/Pill';


const ModelEditor = ({ value, onChange }) => (
  <div>
    <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Model</h2>
    <div className="mt-4">
      <label htmlFor="model-name-input" className="block font-medium text-gray-700">Name</label>
      <aside className="text-sm text-gray-500">CamelCased or under_scored</aside>
      <input
        id="model-name-input"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder='ModelName'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
)


export default function Home() {
  const [modelName, setModelName] = useState('ExampleModel');
  const [parentName, setParentName] = useState('Wow');
  const [showModelEditor, setShowModelEditor] = useState(false);
  const [fieldUnderEdit, setFieldUnderEdit] = useState(null);
  const [showCopying, setShowCopying] = useState(false);

  const [fields, setFields] = useState(['other_model:references{polymorphic}:uniq']);

  const copyCliCommand = () => {
    const cliCommand = `bin/rails g model ${modelName} ${fields.join(' ')}`;
    setShowCopying(true);
    navigator.clipboard.writeText(cliCommand);
    setTimeout(() => setShowCopying(false), 2000);
  }

  const toggleModelEditor = () => {
    setFieldUnderEdit(null)
    setShowModelEditor(!showModelEditor)
  }

  const toggleFieldEditor = (fieldIndex) => {
    setShowModelEditor(false);
    // a bit hacky
    if (fieldUnderEdit == null || fieldIndex != fieldUnderEdit) {
      setFieldUnderEdit(fieldIndex);
    } else {
      setFieldUnderEdit(null);
    }
  }

  const setFieldFor = (index) => {
    return (value) => {
      const newFields = fields.slice();
      newFields[index] = value;
      setFields(newFields);
    }
  }

  const addField = () => {
    // note that fields.length is the length before adding the field
    toggleFieldEditor(fields.length);
    setFields(fields.concat(['']));
  }

  const removeField = (index) => {
    let newFields = fields.slice();
    newFields.splice(index, 1);
    setFieldUnderEdit(null);
    setFields(newFields);
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
                {/** mt-5 is a hack, see leftIcon also */}
                <span className="ml-2 mt-5">bin/rails g model</span>
                <Pill
                  heading="model"
                  text={modelName}
                  onClick={toggleModelEditor}
                  baseColor="yellow"
                />
                {
                  fields.map((field, index) => (
                    <Pill
                      key={index}
                      heading={`attribute ${index}`}
                      text={field}
                      onClick={() => toggleFieldEditor(index)}
                      baseColor="blue"
                    />
                  ))
                }
                <Pill
                  text="+ Attribute"
                  baseColor="gray"
                  borderStyle="dashed"
                  onClick={addField}
                  editable={false}
                />
                <Pill
                  text={`--parent ${parentName}`}
                  baseColor={parentName ? "green" : "gray"}
                  borderStyle={parentName ? "solid" : "dashed"}
                  onClick={console.log}
                />
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

          {(showModelEditor || fieldUnderEdit != null) &&
            <div className="max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8">
              <div className="bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden">
                {showModelEditor &&
                  <section aria-labelledby="model_name_editor">
                    <ModelEditor value={modelName} onChange={setModelName} />
                  </section>
                }
                {
                  fieldUnderEdit != null &&
                  <section id="fields" aria-labelledby="attribute_editor">
                    <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Attribute {fieldUnderEdit}</h2>
                    <FieldInput
                      value={fields[fieldUnderEdit]}
                      onUpdate={setFieldFor(fieldUnderEdit)}
                      onDelete={() => removeField(fieldUnderEdit)}
                    />
                  </section>
                }
              </div>
            </div>
          }
        </div>
      </main>


      <footer className={styles.footer}>
        a project by&nbsp;
        <a
          href="https://www.wasabigeek.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          wasabigeek
        </a>
      </footer>
    </div >
  )
}
