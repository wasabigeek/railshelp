import { useState } from "react";

const JoinTableForm = ({ initialName, onChange }) => {
  const [name, setName] = useState(initialName);

  const handleChange = (newName) => {
    setName(newName);

    // TODO: show this validation to users
    if (newName) {
      onChange(`${newName}JoinTable`);
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
      <input
        id="model-name-input"
        data-testid="migration-prefix"
        className="mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
        placeholder="Columns"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      JoinTable
    </div>
  );
};

export default JoinTableForm;
