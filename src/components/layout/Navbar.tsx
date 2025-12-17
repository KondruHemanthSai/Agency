import { useState, useEffect } from "react";
import { NavBar } from "@/components/ui/NavBar";
import { Home, User, Lightbulb, Package, Users, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Hook to detect scroll direction
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}

export function Navbar() {
  const scrollDirection = useScrollDirection();
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Lightbulb },
    { name: 'Projects', url: '/projects', icon: Package },
    { name: 'Clients', url: '/clients', icon: Users },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return (
    <>
      <div className={`fixed top-4 left-6 z-50 transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-32" : "translate-y-0"}`}>
        <Link to="/" className="flex items-center pointer-events-auto">
          <img
            src="/assets/logo.svg"
            alt="Buildoholics Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>
      </div>
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-40 pt-6 transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-32" : "translate-y-0"}`}>
        <NavBar items={navItems} />
      </div>
    </>
  );
}

