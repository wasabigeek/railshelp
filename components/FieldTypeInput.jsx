import LimitConfig from "./LimitConfig";
import ReferencesConfig from "./ReferencesConfig";
import FieldTypeSplitter from "../helpers/FieldTypeSplitter";
import PrecisionScaleConfig from "./PrecisionScaleConfig";

const FieldTypeConfig = ({ type, config, onChange }) => {
  switch (type) {
    // TODO: figure out how to clear values when swapping
    case "references":
      return <ReferencesConfig value={config} onChange={onChange} />;
    case "integer":
    case "string":
    case "text":
    case "binary":
      return <LimitConfig value={config} onChange={onChange} />;
    case "decimal":
      return <PrecisionScaleConfig value={config} onChange={onChange} />;
    default:
      return null;
  }
};

/**
 * Component for setting the FieldType.
 *
 * @param {Object} options
 * @param {string} options.value - e.g. "references{polymorphic}"
 * @param {function} options.onChange
 * @returns
 */

export default function FieldTypeInput({ value, onChange }) {
  const [type, config] = new FieldTypeSplitter({ text: value }).split();

  const updateFieldType = ({ newType, newConfig }) => {
    onChange(`${newType || type}${newConfig ?? config}`);
  };

  return (
    <div>
      <label className="block font-medium text-gray-700">Field Type</label>

      <select
        value={type}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) =>
          updateFieldType({ newType: e.target.value, newConfig: "" })
        }
      >
        <option disabled value={""}>
          -- required --
        </option>
        {[
          "primary_key",
          "float",
          "boolean",
          "date",
          "time",
          "datetime",
          "references",
          "digest",
          "token",
          "integer",
          "string",
          "text",
          "binary",
          "decimal",
        ].map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <FieldTypeConfig
        type={type}
        config={config}
        onChange={(value) => updateFieldType({ newConfig: value })}
      />
    </div>
  );
}
