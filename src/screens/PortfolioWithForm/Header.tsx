import * as React from "react";
import { navItems } from "../../data/data";

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    // Main nav items to show directly
    const mainNavItems = navItems.filter(item => 
        item.label === "About" || item.label === "Projects" || item.label === "Contacts"
    );
    
    // Dropdown items (everything else)
    const dropdownItems = navItems.filter(item => 
        item.label !== "About" && item.label !== "Projects" && item.label !== "Contacts"
    );

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };
        const onResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };
        
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownOpen && !(e.target as Element).closest('.dropdown-container')) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <header className="w-full h-16 flex justify-between items-center px-4 sm:px-8 lg:px-16 bg-transparent shadow-sm sticky top-0 z-10">
            <div className="font-bold text-font-high-emphasis text-lg whitespace-nowrap">Peter Chege</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
                {/* Main nav items */}
                {mainNavItems.map((item) => (
                    <a 
                        key={item.label} 
                        href={item.href} 
                        className="font-body-18px text-font-high-emphasis hover:text-brand-yellow transition-colors duration-300"
                    >
                        {item.label}
                    </a>
                ))}
                
                {/* Dropdown for other items */}
                {dropdownItems.length > 0 && (
                    <div className="relative dropdown-container">
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-1 font-body-18px text-font-high-emphasis hover:text-brand-yellow transition-colors duration-300 focus:outline-none"
                        >
                            More
                            <svg 
                                className={`w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                                {dropdownItems.map((item) => (
                                    <a 
                                        key={item.label} 
                                        href={item.href} 
                                        onClick={() => setDropdownOpen(false)}
                                        className="block px-4 py-2 text-font-high-emphasis hover:bg-gray-50 hover:text-brand-yellow transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button 
                    aria-controls="mobile-menu" 
                    aria-expanded={menuOpen} 
                    onClick={() => setMenuOpen((s) => !s)} 
                    className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div id="mobile-menu" className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-20">
                    <div className="flex flex-col p-4 gap-1">
                        {navItems.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href} 
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-3 rounded-md font-body-18px text-font-high-emphasis hover:bg-gray-50 hover:text-brand-yellow transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}