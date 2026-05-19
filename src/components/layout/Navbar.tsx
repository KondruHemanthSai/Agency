import { NavBar } from "@/components/ui/NavBar";
import { Home, User, Lightbulb, Users, Mail } from "lucide-react";

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Lightbulb },
    { name: 'Clients', url: '/clients', icon: Users },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
}
