const Footer = () => (
  <footer className="w-full flex flex-col sm:flex-row justify-center items-center md:h-24 text-gray-500 pt-4 px-2">
    <span className="hidden sm:inline sm:mr-2">
      Have a suggestion or found a bug? Open an issue on&nbsp;
    </span>
    <a
      href="https://github.com/wasabigeek/railshelp/issues"
      target="_blank"
      rel="noopener noreferrer"
      className="py-2 px-3 rounded-lg text-gray-800 border hover:bg-gray-50 flex justify-center items-center"
    >
      <svg
        className="h-5 w-5 hover:bg-gray-50 fill-current text-gray-800"
        viewBox="0 0 136 133"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
      >
        <path d="M67.866.002C30.387.002 0 30.39 0 67.877c0 29.988 19.446 55.425 46.417 64.404 3.396.621 4.633-1.475 4.633-3.275 0-1.608-.058-5.879-.091-11.541-18.88 4.1-22.863-9.1-22.863-9.1-3.087-7.838-7.537-9.925-7.537-9.925-6.163-4.213.466-4.13.466-4.13 6.813.484 10.396 6.996 10.396 6.996 6.054 10.371 15.888 7.375 19.754 5.642.617-4.387 2.367-7.38 4.309-9.075-15.071-1.712-30.917-7.537-30.917-33.546 0-7.408 2.646-13.466 6.988-18.212-.7-1.717-3.03-8.617.662-17.963 0 0 5.7-1.825 18.667 6.959 5.412-1.505 11.22-2.259 16.992-2.284 5.762.025 11.57.78 16.991 2.284 12.959-8.784 18.646-6.959 18.646-6.959 3.704 9.346 1.375 16.246.675 17.963 4.35 4.746 6.98 10.804 6.98 18.212 0 26.075-15.872 31.813-30.992 33.492 2.437 2.096 4.608 6.237 4.608 12.57 0 9.072-.083 16.392-.083 18.617 0 1.817 1.22 3.93 4.666 3.267 26.95-8.996 46.38-34.417 46.38-64.396 0-37.487-30.392-67.875-67.88-67.875" />
      </svg>
      <span className="ml-2">GitHub</span>
    </a>
  </footer>
);

export default Footer;
