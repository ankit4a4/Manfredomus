import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoMan.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLink = [
        { name: 'Home', path: '/' },
        { name: 'History', path: '/history' },
        { name: 'Services', path: '/services' },
        { name: 'Structure', path: '/structure' },
        { name: 'Surroundings', path: '/surroundings' },
        { name: 'Events', path: '/events' },
        { name: 'How to get there', path: '/howtoget' },
        { name: 'Feedback', path: '/deedback' },
        { name: 'Book', path: '/book' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (path) => {
        const base = "text-sm font-medium transition";
        const active = location.pathname === path;
        const color = scrolled ? "text-black" : "text-white";
        const hover = "hover:text-[#A5886E]";
        const activeColor = active ? "text-[#A5886E]" : color;
        return `${base} ${activeColor} ${hover}`;
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center justify-between px-4 md:px-20 py-4">
                <div>
                    <img className="w-[80px] md:w-[130px]" src={logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLink.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={getLinkStyle(item.path)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} color={scrolled ? '#000' : '#fff'} /> : <Menu size={28} color={scrolled ? '#000' : '#fff'} />}
                    </button>
                </div>
            </div>

            {/* Slide-in Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <img className="w-[100px]" src={logo} alt="Logo" />
                    <button onClick={() => setIsOpen(false)}>
                        <X size={26} />
                    </button>
                </div>
                <div className="flex flex-col px-4 py-4 space-y-4">
                    {navLink.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`text-sm font-medium transition ${location.pathname === item.path
                                ? 'text-[#A5886E]'
                                : 'text-[#597429]'
                                } hover:text-[#A5886E]`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                />
            )}
        </header>
    );
};

export default Header;
