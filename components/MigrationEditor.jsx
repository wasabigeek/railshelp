const MigrationEditor = ({ value, onChange }) => (
  <div>
    <h2 className="text-xl leading-6 font-medium text-gray-900">Edit Migration</h2>
    <div className="mt-4">
      <label className="block font-medium text-gray-700" htmlFor="migration_format">
        Format
      </label>
      <select
        id="migration_format"
        value={""}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={console.log}
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

      <label htmlFor="model-name-input" className="block font-medium text-gray-700">Name</label>
      <aside className="text-sm text-gray-500">CamelCased or under_scored</aside>
      Add
        <input
          id="model-name-input"
          data-testid="add-columns-name"
          className="mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder="Columns"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      To
        <input
          id="model-name-input"
          data-testid="add-to-table-name"
          className="mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder="Table"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    </div>
  </div>
);

export default MigrationEditor;
