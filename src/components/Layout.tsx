import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Royal Thai Embassy</h3>
            <p className="text-primary-foreground/90 mb-4">Helsinki, Finland</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
              <p>Bulevardi 31, 00180 Helsinki</p>
              <p>Tel: +358 44 444 4444</p>
              <p>consular@tembassy.fi</p>
            </div>
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
