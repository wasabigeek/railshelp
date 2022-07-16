function PrecisionScaleConfig({ value, onChange }) {
  const [precision, scale] = value.replace(/{|}/g, "").split(",");

  // changes - Object with any keys in: precision, scale
  const updatePrecisionAndScale = (changes) => {
    const newData = Object.assign({ precision, scale }, changes);
    onChange(`{${newData.precision},${newData.scale}}`);
  };

  return (
    <div>
      <div className="flex w-full justify-between space-x-2 mt-2">
        <div className="flex-1">
          <label
            className="text-sm font-normal text-gray-700"
            htmlFor="precision_input"
          >
            Precision
          </label>
          <input
            id="precision_input"
            type="number"
            value={precision}
            className="text-input"
            onChange={(e) =>
              updatePrecisionAndScale({ precision: e.target.value })
            }
          />
        </div>
        <div className="flex-1">
          <label
            className="text-sm font-normal text-gray-700"
            htmlFor="scale_input"
          >
            Scale
          </label>
          <input
            id="scale_input"
            type="number"
            value={scale}
            className="text-input"
            onChange={(e) => updatePrecisionAndScale({ scale: e.target.value })}
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Note: depending on your shell, you may need to wrap this in quotes, see&nbsp;
        <a
          href="https://github.com/rails/rails/issues/13520#issuecomment-44698117"
          target="_blank"
          className="underline hover:text-gray-700"
        >
          issue
        </a>.
      </p>
    </div>
  );
}

export default PrecisionScaleConfig;
