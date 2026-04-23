import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Navbar />
      <main key={pathname} className="page-enter flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
