module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Dark Goldenrod
        primary: {
          DEFAULT: "#B8860B", // dark-goldenrod
          50: "#FEF7E0", // light-goldenrod-50
          100: "#FDECC8", // light-goldenrod-100
          200: "#FBD38D", // light-goldenrod-200
          300: "#F6AD55", // light-goldenrod-300
          400: "#ED8936", // light-goldenrod-400
          500: "#B8860B", // dark-goldenrod-500
          600: "#9C6F0A", // dark-goldenrod-600
          700: "#7C5808", // dark-goldenrod-700
          800: "#5D4206", // dark-goldenrod-800
          900: "#3E2C04", // dark-goldenrod-900
        },
        // Secondary Colors - Slate Gray
        secondary: {
          DEFAULT: "#4A5568", // slate-gray
          50: "#F7FAFC", // slate-gray-50
          100: "#EDF2F7", // slate-gray-100
          200: "#E2E8F0", // slate-gray-200
          300: "#CBD5E0", // slate-gray-300
          400: "#A0AEC0", // slate-gray-400
          500: "#4A5568", // slate-gray-500
          600: "#2D3748", // slate-gray-600
          700: "#1A202C", // slate-gray-700
          800: "#171923", // slate-gray-800
          900: "#0F1419", // slate-gray-900
        },
        // Accent Colors - Vibrant Gold
        accent: {
          DEFAULT: "#E6B800", // vibrant-gold
          50: "#FFFBEB", // vibrant-gold-50
          100: "#FEF3C7", // vibrant-gold-100
          200: "#FDE68A", // vibrant-gold-200
          300: "#FCD34D", // vibrant-gold-300
          400: "#FBBF24", // vibrant-gold-400
          500: "#E6B800", // vibrant-gold-500
          600: "#D97706", // vibrant-gold-600
          700: "#B45309", // vibrant-gold-700
          800: "#92400E", // vibrant-gold-800
          900: "#78350F", // vibrant-gold-900
        },
        // Background Colors
        background: "#FAFAFA", // warm-off-white
        surface: "#FFFFFF", // pure-white
        // Text Colors
        text: {
          primary: "#2D3748", // deep-charcoal
          secondary: "#718096", // medium-gray
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // professional-green
          50: "#F0FFF4", // professional-green-50
          100: "#C6F6D5", // professional-green-100
          200: "#9AE6B4", // professional-green-200
          300: "#68D391", // professional-green-300
          400: "#48BB78", // professional-green-400
          500: "#38A169", // professional-green-500
          600: "#2F855A", // professional-green-600
          700: "#276749", // professional-green-700
          800: "#22543D", // professional-green-800
          900: "#1C4532", // professional-green-900
        },
        warning: {
          DEFAULT: "#D69E2E", // amber-warning
          50: "#FFFBEB", // amber-warning-50
          100: "#FEF3C7", // amber-warning-100
          200: "#FDE68A", // amber-warning-200
          300: "#FCD34D", // amber-warning-300
          400: "#FBBF24", // amber-warning-400
          500: "#D69E2E", // amber-warning-500
          600: "#D97706", // amber-warning-600
          700: "#B45309", // amber-warning-700
          800: "#92400E", // amber-warning-800
          900: "#78350F", // amber-warning-900
        },
        error: {
          DEFAULT: "#E53E3E", // controlled-red
          50: "#FED7D7", // controlled-red-50
          100: "#FEB2B2", // controlled-red-100
          200: "#FC8181", // controlled-red-200
          300: "#F56565", // controlled-red-300
          400: "#E53E3E", // controlled-red-400
          500: "#C53030", // controlled-red-500
          600: "#9B2C2C", // controlled-red-600
          700: "#742A2A", // controlled-red-700
          800: "#63171B", // controlled-red-800
          900: "#521B1F", // controlled-red-900
        },
        // Border Colors
        border: "#E2E8F0", // subtle-border
        "border-light": "#F7FAFC", // light-border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'professional': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
