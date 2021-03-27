import { useState } from "react";

const CustomMigrationForm = ({ initialName, onChange }) => {
  const [name, setName] = useState(initialName);

  const handleChange = (changedName) => {
    setName(changedName);

    // TODO: show this validation to users
    if (changedName) {
      onChange(changedName);
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
        data-testid="add-columns-name"
        className="text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"
        placeholder="CustomMigrationName"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default CustomMigrationForm;
