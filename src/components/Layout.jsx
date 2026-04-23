import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const el = mainRef.current;
    if (el) {
      el.style.opacity = "0";
      requestAnimationFrame(() => {
        el.style.opacity = "1";
      });
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Navbar />
      <main
        ref={mainRef}
        key={pathname}
        className="page-enter flex-1 pt-20 transition-opacity duration-500"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
