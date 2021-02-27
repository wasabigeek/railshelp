const LimitConfig = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Limit:
        <input
          value={value.replace(/{|}/g, '')}
          onChange={(e) => onChange(`{${e.target.value}}`)}
        />
      </label>
    </div>
  );
}

export default LimitConfig;
