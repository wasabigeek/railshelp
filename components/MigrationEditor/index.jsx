import { useState } from "react";
import { MIGRATION_FORMATS } from "../../helpers/constants";
import parseMigrationFormat from "../../helpers/parseMigrationFormat";
import AddColumnsForm from "./AddColumnsForm";
import CustomMigrationForm from "./CustomMigrationForm";
import JoinTableForm from "./JoinTableForm";
import RemoveColumnsForm from "./RemoveColumnsForm";

/**
 * Factory that returns the right Form component based on format, and passes props to it.
 */
const MigrationForm = ({ format, ...props }) => {
  let Component = CustomMigrationForm;
  switch (format) {
    case MIGRATION_FORMATS.ADD_COLUMNS:
      Component = AddColumnsForm;
      break;
    case MIGRATION_FORMATS.REMOVE_COLUMNS:
      Component = RemoveColumnsForm;
      break;
    case MIGRATION_FORMATS.JOIN_TABLE:
      Component = JoinTableForm;
      break;
  }

  return <Component {...props} />;
};

const MigrationEditor = ({
  initialName = "",
  format,
  onChangeName,
  onChangeFormat,
}) => {
  return (
    <div>
      <h2 className="text-xl leading-6 font-medium text-gray-900">
        Edit Migration
      </h2>
      <div className="flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100">
        <div>
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
            onChange={(e) => onChangeFormat(e.target.value)}
          >
            <option disabled value={""}>
              -- required --
            </option>
            {Object.values(MIGRATION_FORMATS).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <MigrationForm
          format={format}
          initialName={initialName}
          onChange={onChangeName}
        />
      </div>
    </div>
  );
};
export default MigrationEditor;
