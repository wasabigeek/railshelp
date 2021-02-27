function PrecisionScaleConfig({ value, onChange }) {
  const [precision, scale] = value.replace(/{|}/g, "").split(",");

  // changes - Object with any keys in: precision, scale
  const updatePrecisionAndScale = (changes) => {
    const newData = Object.assign({ precision, scale }, changes);
    onChange(`{${newData.precision},${newData.scale}}`);
  };

  return (
    <div>
      <label>
        Precision:
        <input
          value={precision}
          className="text-input"
          onChange={(e) =>
            updatePrecisionAndScale({ precision: e.target.value })
          }
        />
      </label>
      <label>
        Scale:
        <input
          value={scale}
          className="text-input"
          onChange={(e) => updatePrecisionAndScale({ scale: e.target.value })}
        />
      </label>
    </div>
  );
}

export default PrecisionScaleConfig;
