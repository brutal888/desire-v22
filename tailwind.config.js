/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand palette — Deep Emerald, Warm Gold, Soft Cream, Charcoal
        forest: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#064E3B", // Deep Emerald (primary)
          600: "#053F30",
          700: "#043226",
          800: "#03261D",
          900: "#021A14",
        },
        gold: {
          50: "#FDF8ED",
          100: "#FAEDCC",
          200: "#F3D694",
          300: "#E9B95E",
          400: "#D97706", // Warm Gold (primary accent)
          500: "#B45309",
          600: "#92400E",
          700: "#78350F",
        },
        cream: {
          50: "#FFFEF9",
          100: "#FFFBEB", // Soft Cream (main bg)
          200: "#FEF3CE",
          300: "#FDEAB0",
          400: "#FBE08A",
        },
        ink: {
          900: "#111827",
          800: "#1F2937", // Charcoal
          700: "#374151",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        tilt: "0 25px 50px -20px rgba(6, 78, 59, 0.35)",
        card: "0 10px 30px -12px rgba(6, 78, 59, 0.25)",
        gold: "0 0 0 1px rgba(217, 119, 6, 0.3), 0 12px 24px -12px rgba(217,119,6,0.35)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(31,41,55,0.04) 1px, transparent 1px)",
        "hero-fade":
          "linear-gradient(180deg, rgba(255,251,235,0) 0%, rgba(255,251,235,0.8) 70%, #FFFBEB 100%)",
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
