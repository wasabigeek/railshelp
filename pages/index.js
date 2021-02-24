import Head from 'next/head'
import { useState } from 'react'
import FieldTypeSplitter from '../helpers/FieldTypeSplitter'
import styles from '../styles/Home.module.css'


const FieldInput = ({ value, onUpdate, onDelete }) => {
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
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid' }}>
      <input placeholder='field_name' defaultValue={fieldName} onChange={(e) => updateField({ fieldName: e.target.value })} />
      <FieldTypeInput value={fieldType} onChange={(value) => updateField({ fieldType: value })} />
      <select value={indexType} onChange={(e) => updateField({ indexType: e.target.value })}>
        <option value={""}>-- optional --</option>
        {
          ["uniq", "index"].map((indexType) => <option key={indexType} value={indexType}>{indexType}</option>)
        }
      </select>
      <br />
      <button onClick={onDelete}>Delete</button>
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
              checked={config == "{polymorphic}" ? true : false}
              onChange={(e) => onChange(e.target.checked ? "{polymorphic}" : "")}
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
    onChange(`${newType || type}${newConfig ?? config}`);
  }

  /** TODO:
   * integer, string, text, binary{10} - limit
   * decimal{10,2} - precision, scale
   */

  return (
    <div>
      <select value={type} onChange={(e) => updateFieldType({ newType: e.target.value })}>
        <option disabled value={""}>-- required --</option>
        {
          ["primary_key", "float", "boolean", "date", "time", "datetime", "references", "digest", "token"]
            .map((type) => <option key={type}>{type}</option>)
        }
        {
          ["integer", "string", "text", "decimal"]
            .map((type) => <option key={type} disabled>{type} (coming soon)</option>)
        }
      </select>
      <FieldTypeConfig type={type} config={config} onChange={(value) => updateFieldType({ newConfig: value })} />
    </div>
  );
}


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

        <h2>Model Name:</h2>
        <input placeholder='ModelName' value={modelName} onChange={(e) => setModelName(e.target.value)} />

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
