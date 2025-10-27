import { useState, useEffect, useRef } from 'react'
import { CodeIcon, HamburgerIcon } from '../assets/icons'
import cv from "../assets/JoseFloresCV.pdf" 

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: cv }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{
      backgroundColor: 'var(--nav-bg, rgba(255, 255, 255, 0.8))',
      borderColor: 'var(--nav-border, rgba(0, 0, 0, 0.1))'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CodeIcon className="w-8 h-8" size={30} color="#c800de" />
            </div>
            <div className="text-xl font-bold text-fuchsia-600">
              Jose Flores
            </div>
          </div>

          {/* Right side - Navigation and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:opacity-80 text-fuchsia-600"
                    download={item.label === 'Resume' ? "JoseFloresCV.pdf" : false}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:opacity-80"
              aria-label="Toggle mobile menu"
            >
              <HamburgerIcon className="w-8 h-8" size={24} color="#c800de" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t" style={{
            borderColor: 'var(--nav-border, rgba(0, 0, 0, 0.1))',
            backgroundColor: 'var(--nav-bg, rgba(255, 255, 255, 0.95))'
          }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex justify-between">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:opacity-80 text-fuchsia-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
