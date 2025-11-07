import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors relative group ${
      isActive ? "text-primary" : "hover:text-primary"
    }`;

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
        <div
          className="h-1 bg-gradient-to-r from-primary to-accent transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Laswell Robotics logo" className="h-8 w-8 rounded" />
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Laswell Robotics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
            </NavLink>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQLnEpZc5Dl_jaQuXUkT0MthngXRUnx1Ewo1kc8ZYjbO9wzg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              Request Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <nav className="container py-4 flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQLnEpZc5Dl_jaQuXUkT0MthngXRUnx1Ewo1kc8ZYjbO9wzg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
