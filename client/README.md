# Key Notes

## Install Dependencies:
```bash
npm install react
npm install -D tailwindcss postcss autoprefixer
```

## Start Local Server
```bash
npm run dev
```

## Configure Tailwind:
- In tailwind.config.js, set the content paths to include Vite’s file structure:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
```

Can establish a common site theme within our tailwind config file. Can define colors, spacing, fonts etc...
We should come up standard fonts/colors/etc to use across the site

Current Progress:
![Landing](./public/landing.png)
![About](./public/about.png)
![Donate](./public/donate.png)
