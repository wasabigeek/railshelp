export default function Pill({
  heading,
  text,
  onClick,
  baseColor = "green",
  borderStyle = "solid",
  editable = true, // TODO: refactor to rightIcon
  leftIcon,
  selected,
}) {
  /** purgecss: border-dashed */
  /** purgecss: border-blue-400 bg-blue-100 bg-blue-200 text-blue-800 hover:bg-blue-200 text-blue-500 */
  /** purgecss: border-yellow-400 bg-yellow-100 bg-yellow-200 text-yellow-800 hover:bg-yellow-200 text-yellow-500 */
  /** purgecss: border-gray-400 bg-gray-100 bg-gray-200 text-gray-800 hover:bg-gray-200 text-gray-500 */
  /** purgecss: border-green-400 bg-green-100 bg-green-200 text-green-800 hover:bg-green-200 text-green-500 */
  const defaultStyles = `border bg-${baseColor}-100`;
  const selectedStyles = `border-2 bg-${baseColor}-200 shadow-lg`;

  return (
    <button
      className={`
        relative py-1 pl-3 pr-2 border-${borderStyle} border-${baseColor}-400 rounded-md text-${baseColor}-800 cursor-pointer break-all
        hover:bg-${baseColor}-200 ${selected ? selectedStyles : defaultStyles}
      `}
      onClick={onClick}
    >
      <span
        className={`
          absolute left-1 -top-4 text-xs px-1 text-${baseColor}-500
          ${selected && "font-semibold"}
        `}
      >
        {heading}
      </span>
      <span className="flex items-center">
        {/** Not sure why I need a fake svg to get alignment working */}
        {leftIcon || <svg className="h-5 w-0"></svg>}
        <span>{text || "......"}</span>
        {editable && (
          <svg
            className={`ml-1 h-5 w-5 text-${baseColor}-500 inline`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        )}
      </span>
    </button>
  );
}
