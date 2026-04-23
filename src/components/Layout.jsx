import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="inline-block h-10 w-10 animate-spin-slow rounded-full border-2 border-forest-500/30 border-t-forest-500" />
        <span className="text-sm text-ink-800/60">Loading…</span>
      </div>
    </div>
  );
}

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
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
