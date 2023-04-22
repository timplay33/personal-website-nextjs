"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap text-headline font-bold bg-background-accent p-3 shadow-2xl lg:fixed w-screen">
        <Link href="/">
          <div className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl hover:bg-background tracking-wide">
              Tim Heidler
            </span>
          </div>
        </Link>
        <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-background ">
                Home
              </div>
            </Link>
            <Link href="/Projects">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-background ">
                Projects
              </div>
            </Link>
            <Link href="https://github.com/timplay33">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-background ">
                Github
              </div>
            </Link>
            <Link href="/">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-background ">
                About
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
