import { defineConfig, loadEnv } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [preact(), tailwindcss()],
    server: {
      allowedHosts: [
        '.serveousercontent.com',
      ],
    },
    preview: {
      allowedHosts: [
        '.serveousercontent.com',
      ],
    },
    define: {
      'process.env.NEXT_PUBLIC_WPP_NUMBER': JSON.stringify(env.NEXT_PUBLIC_WPP_NUMBER),
    },
  };
})
