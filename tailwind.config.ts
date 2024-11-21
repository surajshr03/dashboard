import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-gray": "var(--BgGray)",
        "active-gray": "var(--ActiveGray)",
        "metrics-gray": "var(--MetricsGray)",
        "inactive-title": "var(--InactiveTitle)",
        metricsGreen: "var(--MetricsGreen)",
        metricsRed: "var(--MetricsRed)",
        "bg-red": "var(--BgRed)",
        "bg-green": "var(--BgGreen)",
        "nav-icon": "var(--NavIcon)",
        "metrics-icon": "var(--MetricsIcon)",
        "btn-confirmed": "#4CAF50", 
        "btn-pending": "#3B82F6", 
        "btn-canceled": "#F44336",
      },
    },
  },
  plugins: [],
} satisfies Config;
