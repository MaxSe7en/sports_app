import React from "react";
// import '../../styles/global.css'
type Props = {};

const Navbar = (props: Props) => {
  return (
    // <header className="bg-indigo-900 h-12" >
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[1em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <a href="#" className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 0C12.1 0 0 12.1 0 27s12.1 27 27 27 27-12.1 27-27S41.9 0 27 0zm0 51C13.7 51 3 40.3 3 27S13.7 3 27 3s24 10.7 24 24-10.7 24-24 24z"
            fill="#4D00B4"
          />
          <path
            d="M27 6C14.8 6 4.9 15.1 4.9 27S14.8 48 27 48s22.1-9.1 22.1-21S39.2 6 27 6zm0 39C15.8 45 6.9 36.1 6.9 27S15.8 9 27 9s20.1 8.9 20.1 18S38.2 45 27 45z"
            fill="#4D00B4"
          />
          <path
            d="M27 12C17.6 12 9.9 18.1 7.1 26.5c.4-.1.8-.1 1.2-.1 5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.1 0-2.2-.2-3.2-.6C12.9 45.1 19.1 51 27 51c9.4 0 17.1-6.1 19.9-14.5-.4.1-.8.1-1.2.1-5.5 0-10-4.5-10-10s4.5-10 10-10c1.1 0 2.2.2 3.2.6C41.1 8.9 34.9 3 27 3z"
            fill="#4D00B4"
          />
          <path
            d="M27 18c-5.5 0-10 4.5-10 10s4.5 10 10 10c1.1 0 2.2-.2 3.2-.6C32.9 45.1 26.7 51 19 51c-9.4 0-17.1-6.1-19.9- 18.
            5.4.4-.8.4-1.2.4-5.5 0-10-4.5-10-10s4.5-10 10-10c1.1 0 2.2.2 3.2.6C12.9 8.9 19.1 3 27 3c5.5 0 10 4.5 10 10 0 .4 0 .8-.1 1.2C33.1 18.2 30.1 18 27 18z"
            fill="#4D00B4"
          />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Sports Vision
        </span>
      </a>
      <ul className="flex justify-between text-white w-1/4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

//aspect-square sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary
