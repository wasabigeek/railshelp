import { useState } from "react";

const JoinTableEditor = ({ initialValue = "", onUpdate, selectedIndex }) => {
  const [initialTableName, initialIndexType] = initialValue.split(":");
  const [tableName, setTableName] = useState(initialTableName);
  const [indexType, setIndexType] = useState(initialIndexType || "");

  const updateField = (changes) => {
    if (changes.tableName) {
      setTableName(changes.tableName);
    }
    if (changes.indexType) {
      setIndexType(changes.indexType);
    }

    const newData = Object.assign({ tableName, indexType }, changes);
    if (newData.tableName) {
      onUpdate(
        `${newData.tableName}${newData.indexType && ":" + newData.indexType}`
      );
    }
  };

  return (
    <div>
      <h2 className="text-xl leading-6 font-medium text-gray-900">
        Edit Table {selectedIndex}
      </h2>
      <div className="flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100">
        <div>
          <label
            htmlFor="attribute_name_input"
            className="block font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="attribute_name_input"
            placeholder="table_name"
            value={tableName}
            onChange={(e) => updateField({ tableName: e.target.value })}
            className="text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"
          />
        </div>

        <div className="pt-4">
          <label className="block font-medium text-gray-700">Index Type</label>
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
        </div>
      </div>
    </div>
  );
};

export default JoinTableEditor;
