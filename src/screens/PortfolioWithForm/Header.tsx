import * as React from "react";
import { navItems } from "../../data/data";

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <header className="w-full h-16 flex justify-between items-center px-4 sm:px-8 lg:px-16 bg-transparent shadow-sm sticky top-0 z-10">
            <div className="font-bold text-font-high-emphasis text-lg whitespace-nowrap">Peter Chege</div>

            <nav className="hidden md:flex gap-12">
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="font-body-18px text-font-high-emphasis hover:text-brand-yellow transition-colors">
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="md:hidden">
                <button aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((s) => !s)} className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2">
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

            {menuOpen && (
                <div id="mobile-menu" className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-20">
                    <div className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md font-body-18px text-font-high-emphasis hover:bg-gray-50 transition-colors">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
