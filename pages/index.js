import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import FieldInput from '../components/FieldInput'


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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">GuideRails!</a>
        </h1>

        <h2><label htmlFor="model-name-input">Model Name:</label></h2>
        <input id="model-name-input" placeholder='ModelName' value={modelName} onChange={(e) => setModelName(e.target.value)} />

        <section id="fields">
          <h2>Fields:</h2>
          {
            fields.map((field, index) => <FieldInput
              value={field}
              key={index}
              onUpdate={setFieldFor(index)}
              onDelete={() => removeField(index)}
            />)
          }
          <div>
            <button onClick={addField}>Add Field</button>
          </div>
        </section>

        <h2>CLI Command:</h2>
        <p className={styles.description}>
          <code className={styles.code}>{`bin/rails g model ${modelName} ${fields.join(' ')}`}</code>
        </p>
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
    </div>
  )
}
