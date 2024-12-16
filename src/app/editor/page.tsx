'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Shirt, Layout, ImageIcon, Upload, Type, Smile, Square, User, Heart, ShoppingCart } from 'lucide-react'

export default function Editor() {
  return (
  <div className="bg-[#F5F5F5]"> 
   <div className="min-h-screen pl-[50px] pr-[50px]">
      {/* Top Navigation */}
     
      {/* Menu Bar */}
      <div className="bg-[#F5F5F5] border-b">
  <div className="container mx-auto px-4 bg-[#F5F5F5]">
    <div className="flex space-x-6 bg-opacity-100">
      {['File', 'Designs', 'Print', 'Share', 'Help'].map((item) => (
        <button
          key={item}
          className="px-3 py-2 text-gray-600 hover:text-gray-900 font-bold"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
</div>
 <div className="flex rounded-2xl bg-white opacity-100"> {/* Updated opening div tag */}
  <div className="flex flex-row items-center space-x-4 py-4 px-4">
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Shirt className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">Products</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
      <Image
            src="https://i.ibb.co/mDtJTWD/Templates-icon.png"
            alt="Background image"
            width={6}
            height={6}
            className="z-0 w-6 h-6 text-gray-500"
          />
     
      </button>
      <span className="text-xs mt-1 text-gray-500">Template</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <ImageIcon className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">AI image</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Upload className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">Upload</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Type className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">Text</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Smile className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">Cliparts</span>
    </div>
    <div className="flex flex-col items-center">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Square className="w-6 h-6 text-gray-500" />
      </button>
      <span className="text-xs mt-1 text-gray-500">Shapes</span>
    </div>
    </div>
</div>     {/* Editor Interface */}
      <div className="flex bg-[#F5F5F5]">

        {/* Left Sidebar */}
        <div className="w-24 absolute  pt-{350px} mt-4">
          <div className="flex flex-col items-start space-y-4 pl-4">
            {[
              { icon: Shirt, label: 'Products' },
              { icon: Layout, label: 'Template' },
              { icon: ImageIcon, label: 'AI image' },
              { icon: Upload, label: 'Upload' },
              { icon: Type, label: 'Text' },
              { icon: Smile, label: 'Cliparts' },
              { icon: Square, label: 'Shapes' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group relative">
                <button className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-md transition-all duration-200 transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-black font-bold" />
                </button>
                <span className="absolute left-full ml-2 top-0 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 p-8 flex items-center justify-center bg-[#F5F5F5]">
          <div className="relative w-96">
            <Image
              src="https://i.ibb.co/v4m3WTS/ssrco-slim-fit-t-shirt-mens-101010-01c5ca27c6-front-square-product-600x600.jpg"
              width={480}
              height={600}
              alt="T-shirt preview"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

