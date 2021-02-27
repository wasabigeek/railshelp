import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import FieldInput from '../components/FieldInput'
import LimitConfig from '../components/LimitConfig';


export default function Home() {
  const [modelName, setModelName] = useState('ExampleModel');
  const [fields, setFields] = useState(['other_model:references{polymorphic}:uniq']);

  const setFieldFor = (index) => {
    return (value) => {
      const newFields = fields.slice();
      newFields[index] = value;
      setFields(newFields);
    }
  }

  const addField = () => {
    setFields(fields.concat(['']));
  }

  const removeField = (index) => {
    let newFields = fields.slice();
    newFields.splice(index, 1);
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

          <div className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
            <div className="bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden">
              <section aria-labelledby="model_name" >

                <h2 className="text-xl leading-6 font-medium text-gray-900">Model Generator</h2>
                <div className="mt-6">
                  <label htmlFor="model-name-input" className="block text-sm font-medium text-gray-700">Model Name</label>
                  <input
                    id="model-name-input"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    placeholder='ModelName'
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                  />
                </div>
              </section>


              <section id="fields" className="mt-8">
                <h3 className="text-xl leading-6 font-medium text-gray-900">Fields</h3>
                <ul className="mt-2 divide-y divide-gray-200">
                  {
                    fields.map((field, index) => (
                      <li className="py-4" key={index}>
                        <FieldInput
                          value={field}
                          onUpdate={setFieldFor(index)}
                          onDelete={() => removeField(index)}
                        />
                      </li>
                    ))
                  }
                </ul>
                <div className="mt-8">
                  <button
                    onClick={addField}
                    className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Add Field
                    </button>
                </div>
              </section>

              <section className="mt-8">
                <h3 className="text-xl leading-6 font-medium text-gray-900">CLI Command:</h3>
                <div className="p-4 bg-gray-100 mt-4">
                  <code>{`bin/rails g model ${modelName} ${fields.join(' ')}`}</code>
                </div>
              </section>
            </div>
          </div>
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
