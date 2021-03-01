export default function Pill({
  heading,
  text,
  onClick,
  baseColor = "green",
  borderStyle = "solid",
  editable = true, // TODO: refactor to rightIcon
  leftIcon,
}) {
  return (
    <span
      className={`
        relative py-1 pl-3 pr-2 border border-${borderStyle} border-${baseColor}-400 rounded-md bg-${baseColor}-100 text-${baseColor}-800 cursor-pointer break-all
        hover:bg-${baseColor}-200
      `}
      onClick={onClick}
    >
      <span
        className={`absolute left-1 -top-4 text-xs px-1 text-${baseColor}-500`}
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
    </span>
  );
}
