const LimitConfig = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Limit:
        <input
          value={value.replace(/{|}/g, "")}
          className="text-input"
          onChange={(e) =>
            onChange(e.target.value ? `{${e.target.value}}` : "")
          }
        />
      </label>
    </div>
  );
};

export default LimitConfig;
