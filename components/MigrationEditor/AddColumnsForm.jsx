import { useMap } from "react-use";
import parseMigrationFormat from "../../helpers/parseMigrationFormat";

const AddColumnsForm = ({ initialName, onChange }) => {
  const [_format, initialNameParts] = parseMigrationFormat(initialName);
  const [nameParts, { set: setNamePart }] = useMap(
    Object.assign({ columnsName: "", tableName: "" }, initialNameParts)
  );

  const handleChange = (changedNameParts) => {
    const newNameParts = Object.assign(nameParts, changedNameParts);
    // not sure why setAll doesn't trigger a re-render if the value is changed to ""
    Object.entries(changedNameParts).forEach(([key, value]) =>
      setNamePart(key, value)
    );

    // TODO: show this validation to users
    if (newNameParts.columnsName && newNameParts.tableName) {
      onChange(`Add${newNameParts.columnsName}To${newNameParts.tableName}`);
    }
  };

  return (
    <div className="pt-4">
      <label
        htmlFor="model-name-input"
        className="block font-medium text-gray-700"
      >
        Name
      </label>
      <aside className="text-sm text-gray-500">CamelCased</aside>
      Add
      <input
        id="model-name-input"
        data-testid="add-columns-name"
        className="mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="Columns"
        value={nameParts.columnsName}
        onChange={(e) => handleChange({ columnsName: e.target.value })}
      />
      To
      <input
        id="model-name-input"
        data-testid="add-to-table-name"
        className="mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="Table"
        value={nameParts.tableName}
        onChange={(e) => handleChange({ tableName: e.target.value })}
      />
    </div>
  );
};

export default AddColumnsForm;
