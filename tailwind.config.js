/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          200: "#b8c7ff",
          300: "#8fa3ff",
          400: "#6179ff",
          500: "#3d5afe", // More vibrant primary
          600: "#1a3bff",
          700: "#0026ff",
          800: "#0018cc",
          900: "#000d99",
        },

        // Neutral colors
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        // Background colors
        background: {
          DEFAULT: "rgb(var(--color-background))",
          dark: "rgb(var(--color-background))",
          alt: "rgb(var(--color-background-alt))",
          elevated: "rgb(var(--color-background-elevated))",
          subtle: {
            DEFAULT: "#f8f9fa",
            dark: "#1A1F2E",
          },
        },
        // Text colors
        text: {
          DEFAULT: "rgb(var(--color-text))",
          dark: "rgb(var(--color-text))",
          muted: "rgb(var(--color-text-muted))",
          subtle: "rgb(var(--color-text-subtle))",
        },
        // Border colors
        border: {
          DEFAULT: "rgb(var(--color-border))",
          dark: "rgb(var(--color-border))",
          strong: "rgb(var(--color-border-strong))",
          subtle: {
            DEFAULT: "rgba(229, 233, 240, 0.3)",
            dark: "rgba(229, 233, 240, 0.05)",
          },
        },
      },
      fontFamily: {
        sans: [
          "Open Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Source Serif Pro", "Georgia", "Times New Roman", "serif"],
        mono: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["1rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        base: ["1.125rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        lg: ["1.25rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        xl: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "2xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        "3xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "4xl": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "5xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "6xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      spacing: {
        // Vertical rhythm system
        section: "4rem", // 64px - Major section spacing
        block: "2rem", // 32px - Block-level spacing
        element: "1rem", // 16px - Element-level spacing
        content: "0.75rem", // 12px - Content-level spacing
        tight: "0.375rem", // 6px  - Tight spacing

        // Legacy spacing (keep for backward compatibility)
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
      maxWidth: {
        // Content widths
        prose: "65ch", // Optimal reading width
        "prose-wide": "85ch", // Wider content area

        // Layout containers - optimized for full-width layouts
        container: "1400px", // Increased from 1280px for better full-width experience
        "container-narrow": "1024px", // For focused content
        "container-wide": "1600px", // For full-width layouts with max constraint

        // Component widths
        card: "400px",
        "card-wide": "600px",
        media: "100%",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "-0.011em",
        wide: "0.025em",
        wider: "0.05em",
      },
      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "rgb(0, 38, 255)" /* primary-700 */,
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            },
            strong: {
              color: "inherit",
              fontWeight: "600",
            },
            code: {
              color: "inherit",
              fontWeight: "400",
              backgroundColor: "rgb(var(--color-background-alt))",
              borderRadius: "0.25rem",
              padding: "0.25rem 0.5rem",
              fontSize: "0.875em",
            },
            pre: {
              color: "inherit",
              backgroundColor: "rgb(var(--color-background-alt))",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              fontSize: "0.875em",
            },
            blockquote: {
              color: "inherit",
              borderLeftColor: "rgb(var(--color-primary))",
              backgroundColor: "rgb(var(--color-background-alt))",
              padding: "1.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              position: "relative",
            },
            "blockquote::before": {
              content: '"\\201C"',
              fontSize: "4em",
              position: "absolute",
              left: "0.5rem",
              top: "-0.5rem",
              color: "rgb(var(--color-primary))",
              fontFamily: "var(--font-serif)",
              opacity: "0.2",
            },
            hr: {
              borderColor: "rgb(var(--color-border))",
              marginTop: "2rem",
              marginBottom: "2rem",
            },
            h1: {
              color: "inherit",
              fontWeight: "800",
              letterSpacing: "-0.025em",
              lineHeight: "1.2",
            },
            h2: {
              color: "inherit",
              fontWeight: "700",
              letterSpacing: "-0.025em",
              lineHeight: "1.3",
            },
            h3: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
              lineHeight: "1.4",
            },
            h4: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
              lineHeight: "1.5",
            },
            h5: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
              lineHeight: "1.6",
            },
            h6: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
              lineHeight: "1.6",
            },
            p: {
              color: "inherit",
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            ul: {
              color: "inherit",
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            ol: {
              color: "inherit",
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            li: {
              color: "inherit",
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            table: {
              color: "inherit",
              marginTop: "2em",
              marginBottom: "2em",
              width: "100%",
              borderCollapse: "collapse",
            },
            th: {
              color: "inherit",
              fontWeight: "600",
              backgroundColor: "rgb(var(--color-background-alt))",
              padding: "0.75rem 1rem",
              borderBottom: "1px solid rgb(var(--color-border))",
            },
            td: {
              color: "inherit",
              padding: "0.75rem 1rem",
              borderBottom: "1px solid rgb(var(--color-border))",
            },
            img: {
              marginTop: "2em",
              marginBottom: "2em",
              borderRadius: "0.5rem",
            },
            figure: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            figcaption: {
              color: "rgb(var(--color-text-muted))",
              fontSize: "0.875em",
              marginTop: "0.5em",
              textAlign: "center",
            },
          },
        },
      },
      transitionDuration: {
        fast: "var(--animation-duration-fast)",
        normal: "var(--animation-duration-normal)",
        slow: "var(--animation-duration-slow)",
      },
      transitionTimingFunction: {
        default: "var(--animation-easing-default)",
        in: "var(--animation-easing-in)",
        out: "var(--animation-easing-out)",
        "in-out": "var(--animation-easing-in-out)",
      },
      animation: {
        "fade-in":
          "fade-in var(--animation-duration-normal) var(--animation-easing-out)",
        "fade-up":
          "fade-up var(--animation-duration-normal) var(--animation-easing-out)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  // Optimize for production
  ...(process.env.NODE_ENV === "production"
    ? {
        safelist: ["dark", "light"],
      }
    : {}),
};
