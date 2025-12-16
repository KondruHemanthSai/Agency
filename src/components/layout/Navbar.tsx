import { StaggeredMenu } from "@/components/ui/StaggeredMenu";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Products', ariaLabel: 'View our products', link: '/products' },
  { label: 'Clients', ariaLabel: 'See our clients', link: '/clients' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/buildoholics/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/buildoholics/' }
];

import { Link } from "react-router-dom";

export function Navbar() {
  const Logo = (
    <Link to="/" className="flex items-center gap-2 pointer-events-auto">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">B</span>
      </div>
      <span className="text-xl font-bold text-foreground">
        Buildoholics
      </span>
    </Link>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-24 z-50 pointer-events-none">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        className=""
        isFixed={true}
        changeMenuColorOnOpen={false}
        colors={['hsl(var(--primary))', 'hsl(var(--secondary))']}
        logoUrl="/favicon.ico"
        accentColor="hsl(var(--primary))"
        logo={Logo}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      >
      </StaggeredMenu>
    </div>
  );
}
