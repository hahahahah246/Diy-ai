"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, User, Heart, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, Menu, X } from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const slides = [
    {
      title: "Super Cool Anime designs you've never seen elsewhere!",
      description: "Check out crazy AI generated Anime designs you can print on your items!",
      cta: "Shop Anime Style"
    },
    {
      title: "Discover unique vintage-inspired artwork",
      description: "Explore our collection of retro and nostalgic designs",
      cta: "Browse Vintage"
    },
    {
      title: "Create your own custom designs",
      description: "Turn your imagination into reality with our design tools",
      cta: "Start Designing"
    }
  ];

  const megaMenuCategories = [
    {
      name: "Clothings",
      subcategories: ["T-Shirts", "Hoodies", "Long Sleeve T-Shirts", "Crewneck Sweatshirts", "Tank Tops", "Leggings"]
    },
    {
      name: "Accessories",
      subcategories: ["Phone cases", "Tote Bags", "Backpacks", "Fanny packs", "Hats", "Socks", "Flip Flops"]
    },
    {
      name: "Home & Living",
      subcategories: ["Mugs", "Wall art & Framed Posters", "Towels", "Water Bottles & Tumblers", "Pillows & Pillow Cases", "Aprons", "Coasters", "Magnets"]
    },
    {
      name: "Kids & Babies",
      subcategories: ["Kids T-Shirts", "Kids Hoodies", "Baby T-Shirts", "Baby Bodysuit"]
    },
    {
      name: "Stationary",
      subcategories: ["Notebooks", "Stickers", "Cards", "Mouse Pads", "Business Cards", "Wall Calendars", "Posters", "Puzzles"]
    },
    {
      name: "Pets",
      subcategories: ["Pet Bowls", "Pet Bandanas", "Pet Leash", "Pet Collar", "Pet Collar & Leash"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuOpen && !(event.target as Element).closest('.mega-menu-container')) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [megaMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (megaMenuOpen) setMegaMenuOpen(false);
  };

  const toggleMegaMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMegaMenuOpen(!megaMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 ${megaMenuOpen ? 'bg-white' : ''}`}>
        <div className="flex items-center gap-4 md:gap-8">
          <h1 className={`text-xl md:text-2xl font-bold ${megaMenuOpen ? 'text-black' : 'text-white'}`}>D.ai.Y</h1>
          <nav className="hidden md:block">
            <ul className={`flex gap-4 md:gap-6 ${megaMenuOpen ? 'text-black' : 'text-white'}`}>
              <li>
                <button
                  className="flex items-center gap-1 text-sm md:text-base"
                  onClick={toggleMegaMenu}
                >
                  Art Geneissance
                  <ChevronDown className={`h-3 w-3 md:h-4 md:w-4 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
                </button>
              </li>
              <li className="text-sm md:text-base">Shop</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className={`border-2 border-white px-2 py-1 md:px-4 md:py-2 pr-8 md:pr-10 text-sm ${
                megaMenuOpen ? 'bg-gray-100 text-black placeholder-gray-500' : 'bg-transparent text-white placeholder-white'
              }`}
            />
            <Search className={`absolute right-2 md:right-3 top-1/2 h-3 w-3 md:h-4 md:w-4 -translate-y-1/2 ${megaMenuOpen ? 'text-gray-500' : 'text-white'}`} />
          </div>
          <button className="p-1 md:p-2 hidden md:block">
            <User className={`h-4 w-4 md:h-5 md:w-5 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
          </button>
          <button className="p-1 md:p-2 hidden md:block">
            <Heart className={`h-4 w-4 md:h-5 md:w-5 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
          </button>
          <button className="p-1 md:p-2">
            <ShoppingCart className={`h-4 w-4 md:h-5 md:w-5 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
          </button>
          <button className="p-1 md:p-2 md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold">D.ai.Y</h1>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Art Geneissance
                  <ChevronDown className={`h-4 w-4 transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {megaMenuOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {megaMenuCategories.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-bold text-gray-900">{category.name}</h3>
                        <ul className="ml-4 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link href="#" className="text-gray-600 hover:text-black">
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li><Link href="#" className="block">Shop</Link></li>
              <li><Link href="#" className="block">Search</Link></li>
              <li><Link href="#" className="block">Account</Link></li>
              <li><Link href="#" className="block">Wishlist</Link></li>
              <li><Link href="#" className="block">Cart</Link></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px] bg-gray-900 overflow-hidden">
        {megaMenuOpen && (
          <div className="absolute left-0 right-0 top-[64px] bg-white shadow-lg z-40 border-t">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {megaMenuCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-1">
                      {category.name}
                      <ChevronRight className="h-4 w-4" />
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <Link 
                            href="#" 
                            className="text-gray-600 hover:text-black text-sm block py-1"
                          >
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={`https://i.ibb.co/SwV7BKN/Home-Hero-banner-image.jpg=Slide${index + 1}`}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="fill"
              />
            </div>
          ))}
        </div>
        <div className="container relative mx-auto px-4 py-8 md:py-12 h-full flex items-center">
          <div className="max-w-xl space-y-2 md:space-y-4 text-white">
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs md:text-sm text-gray-900">
              FOMO Alert!
            </span>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              {slides[currentSlide].description}
            </p>
            <button className="bg-white text-[#00C4CC] font-bold py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm lg:text-base hover:bg-gray-100 transition-colors">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
        <button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 md:p-2 rounded-full text-white"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 md:p-2 rounded-full text-white"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </section>

      {/* Categories */}
      <section className="bg-black py-4 md:py-8">
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 12.5}%)` }}
              >
                {[
                  { name: 'Vintage', image: 'https://i.ibb.co/FwwmPNL/Category-Icon-Vintage.png' },
                  { name: 'Surrealism', image: 'https://i.ibb.co/vvcBnkm/Category-Icon-Surrealism.jpg' },
                  { name: 'Mindfulness', image: 'https://i.ibb.co/smLDfzq/Category-Icon-Mindfulness.jpg' },
                  { name: 'Love', image: 'https://i.ibb.co/YcwsxRH/Category-Icon-Love.jpg' },
                  { name: 'Anime', image: 'https://i.ibb.co/M27s5rK/Category-Icon-Anime.jpg' },
                  { name: 'Animals', image: 'https://i.ibb.co/Zc0znbq/Category-Icon-Animal.webp' },
                  { name: 'Nature', image: 'https://i.ibb.co/pRXBJzv/Category-Icon-Nature.jpg' },
                  { name: 'Abstract', image: 'https://i.ibb.co/0q2KJt4/Category-Icon-Abstract.png' }
                ].map((category) => (
                  <div key={category.name} className="flex-shrink-0 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8 px-1 md:px-2">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 mx-auto overflow-hidden rounded-full bg-gray-800">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-1 md:mt-2 text-center text-xs md:text-sm text-white">{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 7))}
            >
              <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white" />
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
              onClick={() => setCurrentSlide((prev) => (prev < 7 ? prev + 1 : 0))}
            >
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      
      {/* Best Sellers */}
      <section className="bg-black py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-8">
            <span className="text-gray-400 text-sm md:text-base">Don't Miss This Week's Hottest Hits!</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Weekly Best Sellers</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="space-y-1 md:space-y-2">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`https://i.ibb.co/6wymMs2/white-screem-Yahoo-Search-Results-12-16-2024-07-07-PM.png=Product${i + 1}`}
                    alt={`Product ${i + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xs md:text-sm font-medium">Product Name</h3>
                <p className="text-xs text-gray-400">by Artist Name</p>
                <p className="text-white text-sm md:text-base font-bold">$99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Artists Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">This Week's Trendiest Art Genesist</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Weekly Top Art Genesists</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-col items-center md:items-start py-2 md:py-4 lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="aspect-square rounded-full overflow-hidden bg-black flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-[450px] lg:h-[450px] lg:mt-8 lg:mx-auto">
                  <Image
                    src="/placeholder.svg"
                    alt="Featured Artist"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <p className="mt-4 text-center text-white pr-[400px] mt-[280px]">Artist Name</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-4 md:gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="aspect-square rounded-full overflow-hidden bg-black flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48">
                    <Image
                      src="/placeholder.svg"
                      alt={`Artist ${i + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"  
                    />
                  </div>
                  <div className="mt-2 md:mt-4 text-center md:text-left text-black">
                    <p className="text-sm md:text-base">Artist Name</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Masters Section */}
      <section className="bg-black py-6 md:py-10">
        <div className="container mx-auto px-4">
          <span className="text-gray-400 text-sm md:text-base">Step into the Worlds of our Art Genesists</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-8 lg:mb-12">Meet the Masters: Inside Art Geneissance</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col w-full sm:w-[200px] h-[300px] md:h-[400px]">
                <div className="h-[200px] md:h-[300px] bg-white rounded-lg overflow-hidden">
                  <Image
                    src="https://i.ibb.co/6wymMs2/white-screem-Yahoo-Search-Results-12-16-2024-07-07-PM.png"
                    alt={`Article ${i + 1}`}
                    width={200}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-2 md:mt-4 text-white text-base md:text-lg font-medium">Article title</h3>
                <p className="text-gray-400 text-sm md:text-base">Meet 'Art Genesist Name'</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">Found your new skill!</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Become an Art Genesist</h2>
          <section className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mb-1 sm:mb-16">
            <Image
              src="https://i.ibb.co/DL863Nx/Sell-your-art-banner.jpg"
              alt="Background image"
              layout="fill"
              objectFit="cover"
              priority
              className="z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 max-w-4xl mx-auto z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                Prompt.. Click.. Earn!
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-8">
                Dai.Y's New Editing tool, powered with AI, makes creating your product range as easy as 1, 2, 3.
              </p>
              <button className="bg-[#00C4CC] text-white font-bold px-3 sm:px-4 md:px-6 py-2 rounded-md w-fit text-sm sm:text-base md:text-lg hover:bg-[#00B3BB] transition-colors">
                Start Selling
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">Hear It Straight From Our Happy Customers!</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 md:border-4 border-grey-500">
                <Image
                  src="https://i.ibb.co/6wymMs2/white-screem-Yahoo-Search-Results-12-16-2024-07-07-PM.png"
                  alt={`Instagram post ${i + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20">
            <div>
              <Link href="/" className="block">
                <div className="w-12 h-12 bg-[#00BFB3] rounded-full flex items-center justify-center text-white font-bold">
                  D.iY
                </div>
              </Link>
            </div>
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div>
                <h3 className="font-medium text-white mb-2 md:mb-4">Art Genesists</h3>
                <ul className="space-y-1 md:space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Our Story</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2 md:mb-4">About Us</h3>
                <ul className="space-y-1 md:space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Community</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Trending</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

