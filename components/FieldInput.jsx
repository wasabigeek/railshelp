import FieldTypeInput from "./FieldTypeInput";

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
    <div className="flex flex-col justify-between">
      <label
        htmlFor="model-name-input"
        className="block text-sm font-medium text-gray-700"
      >
        Model Name
      </label>
      <input
        placeholder="field_name"
        defaultValue={fieldName}
        onChange={(e) => updateField({ fieldName: e.target.value })}
        className="text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"
      />
      <div className="mt-8">
        <FieldTypeInput
          value={fieldType}
          onChange={(value) => updateField({ fieldType: value })}
        />
      </div>

      <label className="block text-sm font-medium text-gray-700 mt-8">
        Index Type
      </label>
      <select
        value={indexType}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
      <button
        onClick={onDelete}
        className="bg-white border border-red-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
      >
        Delete
      </button>
    </div>
  );
}
