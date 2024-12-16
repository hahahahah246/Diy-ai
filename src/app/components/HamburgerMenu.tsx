"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    
    <div className="max-h-screen bg-[#F5F5F5] text-[#000000] font-bold ">
    <header className="flex items-center justify-between px-4 sm:px-6 p-2">
    <Image
            src="https://i.ibb.co/rm27hJ2/DAIY-logo-B-W.png"
            alt="Background image"
            width={40}
            height={40}
            className="z-0 w-6 h-6 text-gray-500"
          />
     <nav className="hidden md:flex items-center space-x-6">
        <Link href="/art-connoissence" className="text-sm">
          Art Connoissance
        </Link>
        <Link href="/shop" className="text-sm">
          Shop
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <User className="w-5 h-5" />
        <Heart className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
      </div>
      <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/art-connoissence" className="text-sm" onClick={toggleMenu}>
              Art Connoissance
            </Link>
            <Link href="/shop" className="text-sm" onClick={toggleMenu}>
              Shop
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <User className="w-5 h-5 fill-black" />
              <Heart className="w-5 h-5 fill-black" />
              <ShoppingCart className="w-5 h-5 fill-black" />
            </div>
          </nav>
        </div>
      )}
    </div>
    </header>
</div>
  )
}

export default HamburgerMenu

