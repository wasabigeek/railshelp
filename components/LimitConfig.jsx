const LimitConfig = ({ value, onChange }) => {
  return (
    <div className="mt-2">
      <label for="limit_input" className="text-sm font-normal text-gray-700">
        Limit
      </label>
      <input
        id="limit_input"
        type="number"
        min="0"
        step="1"
        value={value.replace(/{|}/g, "")}
        className="text-input"
        onChange={(e) => onChange(e.target.value ? `{${e.target.value}}` : "")}
      />
    </div>
  );
};

export default LimitConfig;
