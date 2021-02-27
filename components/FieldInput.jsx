import { FieldTypeInput } from "../pages/index";

export default function FieldInput({ value, onUpdate, onDelete }) {
  const [fieldName, fieldType = "", indexType = ""] = value.split(":");

  // changes - Object with any keys in: fieldName, fieldType, indexType
  const updateField = (changes) => {
    const newData = Object.assign({ fieldName, fieldType, indexType }, changes);
    onUpdate(
      [newData.fieldName, newData.fieldType, newData.indexType]
        .filter((value) => !!value)
        .join(":")
    );
  };

  return (
    <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid" }}>
      <input
        placeholder="field_name"
        defaultValue={fieldName}
        onChange={(e) => updateField({ fieldName: e.target.value })}
      />
      <FieldTypeInput
        value={fieldType}
        onChange={(value) => updateField({ fieldType: value })}
      />
      <select
        value={indexType}
        onChange={(e) => updateField({ indexType: e.target.value })}
      >
        <option value={""}>-- optional --</option>
        {["uniq", "index"].map((indexType) => (
          <option key={indexType} value={indexType}>
            {indexType}
          </option>
        ))}
      </select>
      <br />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
