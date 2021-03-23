import { useState } from "react";
import { useMap } from "react-use";

const MigrationEditor = ({ value, onChange }) => {
  const [format, setFormat] = useState("");
  const [nameParts, { set: setNameParts }] = useMap({
    columnsName: "",
    tableName: "",
  });

  const handleChange = (changedNameParts) => {
    const newNameParts = Object.assign(nameParts, changedNameParts);
    setNameParts(newNameParts);
    onChange(`Add${newNameParts.columnsName}To${newNameParts.tableName}`);
  };

  return (
    <div>
      <h2 className="text-xl leading-6 font-medium text-gray-900">
        Edit Migration
      </h2>
      <div className="mt-4">
        <label
          className="block font-medium text-gray-700"
          htmlFor="migration_format"
        >
          Format
        </label>
        <select
          id="migration_format"
          value={format}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={setFormat}
        >
          <option disabled value={""}>
            -- required --
          </option>
          {[
            "AddColumnsToTable",
            "RemoveColumnsFromTable",
            "CreateModelJoinTable",
            "Custom Migration",
          ].map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {format && (
          <div>
            <label
              htmlFor="model-name-input"
              className="block font-medium text-gray-700"
            >
              Name
            </label>
            <aside className="text-sm text-gray-500">
              CamelCased or under_scored
            </aside>
            Add
            <input
              id="model-name-input"
              data-testid="add-columns-name"
              className="mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Columns"
              value={nameParts.columnsName}
              onChange={(e) => handleChange({ columnsName: e.target.value })}
            />
            To
            <input
              id="model-name-input"
              data-testid="add-to-table-name"
              className="mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Table"
              value={nameParts.tableName}
              onChange={(e) => handleChange({ tableName: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default MigrationEditor;
