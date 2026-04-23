/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand palette
        forest: {
          50: "#eaf3ee",
          100: "#cfe4d6",
          200: "#9cc9ac",
          300: "#6aae82",
          400: "#3f8e5c",
          500: "#2d6a4f", // primary forest green
          600: "#245640",
          700: "#1b4131",
          800: "#132d22",
          900: "#0b1b14",
        },
        gold: {
          50: "#fbf4e4",
          100: "#f5e3bb",
          200: "#edcd86",
          300: "#e4b75a",
          400: "#d4a24c", // warm gold
          500: "#b6872e",
          600: "#8a6622",
          700: "#5e4617",
        },
        cream: {
          50: "#fdfbf5",
          100: "#faf7f0", // cream background
          200: "#f2ecde",
          300: "#e8dfc8",
          400: "#d8cca9",
        },
        ink: {
          900: "#0f1a14",
          800: "#152218",
          700: "#1d2b22",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        tilt: "0 25px 50px -20px rgba(11, 27, 20, 0.35)",
        card: "0 10px 30px -12px rgba(11, 27, 20, 0.25)",
        gold: "0 0 0 1px rgba(212, 162, 76, 0.3), 0 12px 24px -12px rgba(212,162,76,0.35)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(15,26,20,0.04) 1px, transparent 1px)",
        "hero-fade":
          "linear-gradient(180deg, rgba(250,247,240,0) 0%, rgba(250,247,240,0.8) 70%, #FAF7F0 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tiltHover: {
          "0%": { transform: "rotateX(0) rotateY(0)" },
          "100%": { transform: "rotateX(6deg) rotateY(-3deg) translateZ(12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.23,1,0.32,1) both",
        "fade-in": "fadeIn 0.9s ease-out both",
        "scale-in": "scaleIn 0.7s cubic-bezier(0.23,1,0.32,1) both",
        "slide-left": "slideInLeft 0.9s cubic-bezier(0.23,1,0.32,1) both",
        "slide-right": "slideInRight 0.9s cubic-bezier(0.23,1,0.32,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spinSlow 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
