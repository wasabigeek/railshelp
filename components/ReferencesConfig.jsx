const ReferencesConfig = ({ value, onChange }) => {
  return (
    <div class="flex space-x-2 items-center mt-2">
      <input
        id="polymorphic_checkbox"
        type="checkbox"
        checked={value == "{polymorphic}" ? true : false}
        onChange={(e) => onChange(e.target.checked ? "{polymorphic}" : "")}
      />
      <label for="polymorphic_checkbox" className="font-normal text-gray-700">
        polymorphic?
      </label>
    </div>
  );
};

export default ReferencesConfig;
