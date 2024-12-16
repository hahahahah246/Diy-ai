"use client"
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-20">
          <div>
            <Link href="/" className="block">
              <div className="w-12 h-12 bg-[#00BFB3] rounded-full flex items-center justify-center text-white font-bold">
                D.iY
              </div>
            </Link>
          </div>
          <nav className="grid grid-cols-4 gap-16">
            <div>
              <h3 className="font-medium text-white mb-4">Art Genesists</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Featured Artists</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Trending</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Our Story</Link></li>
                </ul>
            </div>
           </nav>
        </div>
      </div>
    </footer>
  )
}

