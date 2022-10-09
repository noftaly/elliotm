import Link from 'next/link';
import { useState } from 'react';
import multiClasses from '../utils/multiClasses.js';

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <nav id="navbar" className="fixed w-full bg-gradient-to-r from-yellow-500 to-yellow-400 z-10 top-0">
      <div className="md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4 font-headline">
          <Link href="/"><a className="text-gray-900 no-underline hover:no-underline font-extrabold text-3xl">Elliot</a></Link>
        </div>

        <div className="block xs:hidden pr-4"
            onClick={() => setHamburgerActive(!hamburgerActive)}>
          <button
            id="nav-toggle"
            className="
              flex items-center px-3 py-2
              border rounded appearance-none
              text-gray-800 border-gray-800
              hover:text-black hover:border-black
              focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={
          multiClasses(
            'hidden xs:block',
            'my-auto',
            'font-semibold',
            'xs:w-auto xs:bg-transparent')}>
          <ul className="list-reset xs:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/about"><a className="navbar-item">About Me</a></Link>
            </li>
            <li className="mr-3">
              <Link href="/projects"><a className="navbar-item">Projects</a></Link>
            </li>
          </ul>
        </div>
      </div>
        <div className={
          multiClasses(
            hamburgerActive ? 'flex xs:hidden' : 'hidden',
            'my-2',
            'font-semibold',
            'flex-row items-center justify-around')}>
          <Link href="/about"><a className="navbar-item">About Me</a></Link>
          <Link href="/projects"><a className="navbar-item">Projects</a></Link>
        </div>
    </nav>
  );
};
