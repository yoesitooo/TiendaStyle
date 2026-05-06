**TAREA ATÓMICA 1: Configurar Vite y Tailwind CSS**

* Crea un archivo `vite.config.js` con el siguiente contenido:
```js
import { defineConfig } from 'vite';
import { tailwindcss } from 'tailwindcss';

export default defineConfig({
  plugins: [tailwindcss()],
});
```
* Crea un archivo `tailwind.config.js` con el siguiente contenido:
```css
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```
**TAREA ATÓMICA 2: Configurar CSS Variables**

* Agrega las siguientes líneas al archivo `index.css`:
```css
:root {
  --color-bg: #0A0A0A;
  --color-surface: #141414;
  --color-gold: #E8C97A;
  --color-white: #FFFFFF;
  --color-muted: #6B6B6B;
  --color-sale: #C0392B;
  --font-display: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;
  --radius: 2px;
  --transition: 300ms ease;
}
```
**TAREA ATÓMICA LISTO**

[PLAN_LISTO]