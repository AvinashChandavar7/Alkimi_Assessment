"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Banner from "./Banner";

const navBarLinks = [
  { id: 'lorem1', label: 'lorem ipsum1' },
  { id: 'lorem2', label: 'lorem ipsum2' },
  { id: 'lore3', label: 'lorem ipsum3' },
  { id: 'lorem4', label: 'lorem ipsum4' },
  { id: 'lorem5', label: 'lorem ipsum5' },
  { id: 'lorem6', label: 'lorem ipsum6 COMING SOON' },
  { id: 'lorem7', label: <Banner /> },
];

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <header className="relative z-10 w-full">
      <nav>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href='/' className="flex items-center justify-center ">
            <Image src='/logo.svg' alt="logo" width={37} height={18} className="object-contain" />
            <h2 className="flex items-center px-1 text-xl font-medium leading-tight text-center text-white">
              {toggleMenu ? "Menu" : "Loream"}
            </h2>
          </Link>

          {/* menu bar */}
          <div className="relative md:hidden">
            <button className="relative p-2 text-white rounded-md outline-none focus:border-gray-400"
              onClick={handleToggleMenu}
            >
              <Image width={37} height={18} className="object-contain"
                src={toggleMenu ? '/x-close.svg' : '/menu-05.svg'}
                alt={toggleMenu ? '/x-close.svg' : '/menu-05.svg'}
              />
            </button>
          </div>
        </div>

        <div className="md:hidden ">
          {
            toggleMenu &&
            (<ul className="items-center justify-center h-screen md:h-auto md:flex">
              {navBarLinks.map(({ id, label }) => (
                <li id={id} key={id} className="px-2 py-2 pb-6 text-xl text-white uppercase md:px-6 text-start">
                  <Link href={`#${id}`} >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>)
          }
        </div>

      </nav>
    </header >
  )
}

export default Navbar