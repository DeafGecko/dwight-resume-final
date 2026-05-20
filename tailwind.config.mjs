/** @type {import('tailwindcss').Config} */
export default {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
      theme: {
            extend: {
                  colors: {
                        // These map to your specific branding variables
                        background: '#121212',
                        foreground: '#e0e0e0',
                        accent: '#f57f00',
                        accentSoft: 'rgba(245, 127, 0, 0.14)',
                  },
            },
      },
      plugins: [],
}