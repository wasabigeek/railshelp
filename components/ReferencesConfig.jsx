const ReferencesConfig = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={value == "{polymorphic}" ? true : false}
          onChange={(e) => onChange(e.target.checked ? "{polymorphic}" : "")}
        />
        polymorphic?
      </label>
    </div>
  );
}

export default ReferencesConfig;
