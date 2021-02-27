function PrecisionScaleConfig({ value, onChange }) {
  const [precision, scale] = value.replace(/{|}/g, "").split(",");

  return (
    <div>
      <label>
        Precision:
        <input
          value={precision}
          onChange={(e) =>
            onChange(e.target.value ? `{${e.target.value}}` : "")
          }
        />
      </label>
      <label>
        Scale:
        <input
          value={scale}
          onChange={(e) =>
            onChange(e.target.value ? `{${e.target.value}}` : "")
          }
        />
      </label>
    </div>
  );
}

export default PrecisionScaleConfig;
