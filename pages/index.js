import Head from 'next/head'
import { useState } from 'react'
import FieldTypeSplitter from '../helpers/FieldTypeSplitter'
import styles from '../styles/Home.module.css'


// references{polymorphic}
// integer, string, text, binary{10} - limit
// decimal{10,2} - precision, scale
// digest, token
const FieldInput = ({ value, onUpdate }) => {
  const [fieldName, fieldType = "", indexType = ""] = value.split(':')

  // changes - Object with any keys in: fieldName, fieldType, indexType
  const updateField = (changes) => {
    const newData = Object.assign({ fieldName, fieldType, indexType }, changes);
    onUpdate(
      [newData.fieldName, newData.fieldType, newData.indexType]
        .filter((value) => !!value)
        .join(':')
    );
  }

  return (
    <div style={{ margin: '10px' }}>
      <input placeholder='field_name' defaultValue={fieldName} onChange={(e) => updateField({ fieldName: e.target.value })} />
      <FieldTypeInput value={fieldType} onChange={(value) => updateField({ fieldType: value })} />
      <select value={indexType} onChange={(e) => updateField({ indexType: e.target.value })}>
        <option value={""}>-- optional --</option>
        {
          ["uniq", "index"].map((indexType) => <option key={indexType} value={indexType}>{indexType}</option>)
        }
      </select>
    </div>
  )
}

const FieldTypeConfig = ({ type, config, onChange }) => {
  switch (type) {
    // TODO: figure out how to clear values when swapping
    case "references":
      return (
        <div>
          <label>
            <input
              type="checkbox"
              checked={config == "polymorphic" ? true : false}
              onChange={(e) => onChange(e.target.checked ? "polymorphic" : "")}
            />
            polymorphic?
          </label>
        </div>
      );
    default:
      return null;
  }
}

/**
 * Component for setting the FieldType.
 *
 * @param {Object} options
 * @param {string} options.value - e.g. "references{polymorphic}"
 * @param {function} options.onChange
 * @returns
 */
const FieldTypeInput = ({ value, onChange }) => {
  const [type, config] = new FieldTypeSplitter({ text: value }).split();

  const updateFieldType = ({ newType, newConfig }) => {
    const configText = (newConfig ?? config) ? `{${newConfig ?? config}}` : '';
    onChange(`${newType || type}${configText}`);
  }

  return (
    <div>
      <select value={type} onChange={(e) => updateFieldType({ newType: e.target.value })}>
        <option disabled value={""}>-- required --</option>
        {
          ["integer", "primary_key", "decimal", "float", "boolean", "binary", "string", "text", "date", "time", "datetime", "references"]
            .map((type) => <option key={type}>{type}</option>)
        }
      </select>
      <FieldTypeConfig type={type} config={config} onChange={(value) => updateFieldType({ newConfig: value })} />
    </div>
  );
}


export default function Home() {
  const [modelName, setModelName] = useState('');
  const [fields, setFields] = useState(['test:string', 'test2']);

  const setField = (index) => {
    return (value) => {
      const newFields = fields.slice();
      newFields[index] = value;
      setFields(newFields);
    }
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

        <input placeholder='ExampleModel' onChange={(e) => setModelName(e.target.value)} />

        {
          fields.map((field, index) => <FieldInput
            value={field}
            key={index}
            onUpdate={setField(index)}
          />)
        }

        <p className={styles.description}>
          <code className={styles.code}>{`bin/rails g model ${modelName} ${fields.join(' ')}`}</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
