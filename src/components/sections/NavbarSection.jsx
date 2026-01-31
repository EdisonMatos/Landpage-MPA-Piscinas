import { useState, useEffect, useRef } from 'react'
import Navbar from '../sectionElements/Navbar'
import Logo from '../../assets/importAssets/Logo.webp'
import ListGroup from '../sectionElements/ListGroup'
import Sidebar from '../sectionElements/Sidebar'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false)
  const [showListGroup, setShowListGroup] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showMenuIcon, setShowMenuIcon] = useState(true)
  const [showSidebarContent, setShowSidebarContent] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const sidebarRef = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setShowMenuIcon(!showMenuIcon)
      setShowSidebarContent(!showSidebarContent)
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false)
          setIsAnimating(false)
        }, 950)
      } else {
        setShowSidebar(true)
        setTimeout(() => {
          setIsAnimating(false)
        }, 0)
      }
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroup(false)
    } else {
      setShowListGroup(true)
    }
  }

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar()
    }
  }

  const handleCloseSidebar = () => {
    setShowSidebar(false)
    setShowSidebarContent(false)
    setIsAnimating(false)
    setShowMenuIcon(true)
  }

  const handleSidebarItemClick = () => {
    handleCloseSidebar()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 top-0 w-full bg-white bg-opacity-0 ${
          scrolling
            ? 'bg-opacity-100 shadow-lg bg-transition-opacity duration-1000'
            : ''
        }`}
      >
        <Navbar>
          <ScrollLink
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={Logo}
              alt="Logo MPA Piscinas"
              width={80}
              height={80}
              className={`mr-[80px] h-[83px] ${
                scrolling
                  ? 'h-[112px] max-h-[112px] transition-all duration-1000'
                  : 'h-[112px] max-h-[112px] transition-all duration-1000'
              } tablet3:mb-0`}
            />
          </ScrollLink>
          <button
            onClick={toggleSidebar}
            className="relative tablet2:hidden"
            aria-label="Abrir menu de navegação"
          >
            {showMenuIcon ? (
              <Menu
                size={32}
                className={` ${scrolling ? 'text-secondary' : 'text-white'}`}
              />
            ) : (
              <X
                size={32}
                className={` ${scrolling ? 'text-secondary' : 'text-white'}`}
              />
            )}
          </button>
          {showListGroup ? <ListGroup /> : null}
        </Navbar>
        <div
          className={`animate-${
            showSidebar ? 'slide-down block' : 'slide-up hidden'
          }`}
          ref={sidebarRef}
        >
          {showSidebar ? (
            <Sidebar
              showSidebar={showSidebarContent}
              handleCloseSidebar={handleCloseSidebar}
              handleSidebarItemClick={handleSidebarItemClick}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
