import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const servicesItems = [
    { name: "Visa Services", path: "/visa-services", description: "Tourist and business visa applications" },
    { name: "Consular Services", path: "/consular-services", description: "Passport renewals and citizen services" },
    { name: "Business Services", path: "/business-services", description: "Trade promotion and investment support" },
  ];

  const aboutItems = [
    { name: "About Embassy", path: "/about-embassy", description: "Our mission, history and staff" },
    { name: "Visit Thailand", path: "/visit-thailand", description: "Travel guides and cultural information" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname === `${path}/`;
  
  const isServiceActive = () => {
    const p = location.pathname.toLowerCase();
    return p.startsWith('/visa-services') || p.startsWith('/consular-services') || p.startsWith('/business-services');
  };
  
  const isAboutActive = () => {
    const p = location.pathname.toLowerCase();
    return p.startsWith('/about-embassy') || p.startsWith('/visit-thailand');
  };

  return (
    <nav className="bg-background border-b border-border shadow-card sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+358 9 477 030</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>consular@thaiembassy.fi</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Bulevardi 31, 00180 Helsinki</span>
            </div>
          </div>
          <div className="text-sm font-medium">
            Working Hours: Mon-Fri 9:00-12:00, 13:00-16:00
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🇹🇭</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Royal Thai Embassy</h1>
              <p className="text-muted-foreground text-sm -mt-1">Helsinki, Finland</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home Link */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      "font-medium transition-colors hover:text-foreground px-3 py-2 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                      isActive("/") ? "text-primary after:scale-x-100" : "text-foreground after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "font-medium relative hover:text-foreground after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-left after:transition-transform after:duration-300 after:scale-x-0 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:after:scale-x-100 data-[state=open]:text-primary focus:bg-transparent active:bg-transparent data-[active]:bg-transparent",
                    isServiceActive() && "text-primary after:scale-x-100"
                  )}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[280px] gap-1 p-2">
                      {servicesItems.map((item) => (
                        <NavigationMenuLink key={item.path} asChild>
                          <Link 
                            to={item.path}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "font-medium relative hover:text-foreground after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-left after:transition-transform after:duration-300 after:scale-x-0 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:after:scale-x-100 data-[state=open]:text-primary focus:bg-transparent active:bg-transparent data-[active]:bg-transparent",
                    isAboutActive() && "text-primary after:scale-x-100"
                  )}>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[280px] gap-1 p-2">
                      {aboutItems.map((item) => (
                        <NavigationMenuLink key={item.path} asChild>
                          <Link 
                            to={item.path}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Link */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={cn(
                      "font-medium transition-colors hover:text-foreground px-3 py-2 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                      isActive("/contact") ? "text-primary after:scale-x-100" : "text-foreground after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-accent hover:bg-accent-hover">
              Emergency Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Services */}
              <div className="px-3 py-1">
                <p className="text-sm font-semibold text-muted-foreground">Services</p>
              </div>
              {servicesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* About */}
              <div className="px-3 py-1 mt-4">
                <p className="text-sm font-semibold text-muted-foreground">About</p>
              </div>
              {aboutItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact */}
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/contact") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2">
                <Button className="w-full bg-accent hover:bg-accent-hover">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;