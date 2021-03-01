const ReferencesConfig = ({ value, onChange }) => {
  return (
    <div className="flex space-x-2 items-center mt-2">
      <input
        id="polymorphic_checkbox"
        type="checkbox"
        checked={value == "{polymorphic}" ? true : false}
        onChange={(e) => onChange(e.target.checked ? "{polymorphic}" : "")}
      />
      <label
        htmlFor="polymorphic_checkbox"
        className="font-normal text-gray-700"
      >
        polymorphic?
      </label>
    </div>
  );
};

export default ReferencesConfig;
