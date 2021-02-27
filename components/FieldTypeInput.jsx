import FieldTypeSplitter from "../helpers/FieldTypeSplitter";
import { FieldTypeConfig } from "../pages/index";

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

  /** TODO:
   * decimal{10,2} - precision, scale
   */
  return (
    <div>
      <select
        value={type}
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
        ].map((type) => (
          <option key={type}>{type}</option>
        ))}
        {["decimal"].map((type) => (
          <option key={type} disabled>
            {type} (coming soon)
          </option>
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
