/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        //RockPaperScissors
        "RPS-scissors-gradient-from" : "hsl(39, 89%, 49%)",
        "RPS-scissors-gradient-to" : "hsl(40, 84%, 53%)",
        "RPS-paper-gradient-from" : "hsl(230, 89%, 62%)",
        "RPS-paper-gradient-to" : "hsl(230, 89%, 65%)",
        "RPS-rock-gradient-from" : "hsl(349, 71%, 52%)",
        "RPS-rock-gradient-to" : "hsl(349, 70%, 56%)",

        "RPS-lizard-gradient-from" : "hsl(261, 73%, 60%)",
        "RPS-lizard-gradient-to" : "hsl(261, 72%, 63%)",
        "RPS-cyan-from" : "hsl(189, 59%, 53%)",
        "RPS-cyan-to" : "hsl(189, 58%, 57%)",
        //Neutral

        "RPS-dark-text" : "hsl(229, 25%, 31%)",
        "RPS-score-text" : "hsl(229, 64%, 46%)",
        "RPS-header-outline": "hsl(217, 16%, 45%)",

        //Background

        "RPS-radial-gradient-from" : "hsl(214, 47%, 23%)",
        "RPS-radial-gradient-to" : "hsl(237, 49%, 15%)",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}