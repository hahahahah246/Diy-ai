"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import { ClerkProvider, SignedOut, SignInButton, UserButton, SignedIn, } from "@clerk/nextjs";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    
    <div className="max-h-screen bg-white text-[#000000] font-bold z-50">
    <header className="flex items-center justify-between  px-4 sm:px-6 p-2 h-[100px]">
    <div className="flex items-center">
      <Image
            src="https://i.ibb.co/rm27hJ2/DAIY-logo-B-W.png"
            alt="Background image"
            width={100}
            height={100}
            className="z-0 w-[180px] h-[100px] text-gray-500"
            
          />
          <nav className="hidden md:flex items-center space-x-6 ml-6">
            <Link href="/art-connoissence" className="text-sm">
              Art Connoissance
            </Link>
            <Link href="/shop" className="text-sm">
              Shop
            </Link>
          </nav>
    </div>
      <div className="hidden md:flex items-center space-x-4 z-100">
      <button className='z-100'>
      <SignedOut>
          <SignInButton/>
          </SignedOut>
          <SignedIn>
            
            <UserButton />
          </SignedIn>
          </button>
        <Heart className="w-5 h-5 fill-black" />
        <ShoppingCart className="w-5 h-5 fill-black" />
      </div>
     
      <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} fill="black" /> : <Menu size={24} fill="black" />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/art-connoissence" className="text-sm" onClick={toggleMenu}>
              Art Connoissance
            </Link>
            <Link href="/shop" className="text-sm" onClick={toggleMenu}>
              Shop
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
            <SignedOut>
          <SignInButton/>
          </SignedOut>
          <SignedIn>
            
            <UserButton />
          </SignedIn>
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
