import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Layout = () => {
  // Hide info bar on scroll
  const [showInfoBar, setShowInfoBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setShowInfoBar(true);
      } else {
        setShowInfoBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Info Bar - compact and sticky, smooth slide up/down on scroll */}
      <div
        className={
          "bg-primary text-primary-foreground px-4 py-2 w-full z-30 sticky top-0 " +
          "transition-all duration-300 " +
          (showInfoBar
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none")
        }
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>Tel: +358 44 444 4444</span>
            <span className="hidden sm:inline-block mx-2">|</span>
            <span>
              <a
                href="mailto:consular@tembassy.fi"
                className="underline hover:text-accent-foreground"
              >
                consular@tembassy.fi
              </a>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 sm:mt-0">
            <span>Bulevardi 31, 00180 Helsinki</span>
            <span className="hidden sm:inline-block mx-2">|</span>
            <span>Working Hours: Mon-Fri 9:00-12:00, 13:00-16:00</span>
          </div>
        </div>
      </div>

      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Royal Thai Embassy</h3>
            <p className="text-primary-foreground/90 mb-4">Helsinki, Finland</p>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                © 2025 Thai Embassy Helsinki Redesign. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
