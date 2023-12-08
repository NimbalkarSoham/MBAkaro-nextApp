'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-900 border-neutral-200 dark:bg-neutral-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MBA Karo
          </span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col font-medium p-4 border border-neutral-100 rounded-lg bg-neutral-50 space-y-2">
            <li>
              <Link
                href="/"
                className="block text-neutral-900 rounded hover:bg-neutral-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="block text-neutral-900 rounded hover:bg-neutral-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-neutral-900 rounded hover:bg-neutral-100"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block text-neutral-900 rounded hover:bg-neutral-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-neutral-100 rounded-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="block py-2 px-3 md:p-0 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 px-3 md:p-0 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block py-2 px-3 md:p-0 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="auth ">
            {session?.user ? (
              <div className="button">
                <button
                  type="button"
                  onClick={signOut}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
