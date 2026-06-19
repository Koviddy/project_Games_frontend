Project: Games Frontend — React + Vite

What this is

This is a small React frontend built with Vite. The app uses React 19 and `react-router-dom` for routing. It contains a set of presentational components in `src/components` that make up the UI (header, footer, games list, search form, etc.).

How to run it (quick)

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in a browser at http://localhost:5173 (Vite's default).

How to build and preview

```bash
npm run build
npm run preview
```

## API

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data.

### How to get an API key

1. Go to [https://rawg.io/apidocs](https://rawg.io/apidocs)
2. Create a free account (or log in)
3. Your API key will be available on the API page once logged in
4. Copy the key and add it to your `.env` file

## Environment Variables

To run this project, create a `.env` file in the root directory and add the following variable:

- `VITE_RAWG_API_KEY` — Your RAWG API key

Useful scripts

- `npm run dev` — starts the dev server with HMR
- `npm run build` — creates an optimized production build
- `npm run preview` — serves the production build locally
- `npm run lint` — runs ESLint over the project

Main files and structure

- `index.html` — HTML entry file
- `vite.config.js` — Vite configuration (uses `@vitejs/plugin-react`)
- `src/main.jsx` — app entry; mounts `App` and sets up `BrowserRouter`
- `src/components/` — contains `App`, `Header`, `Footer`, `Games`, `GamesCard`, `Hero`, `Main`, `Navigation`, `Preloader`, `SearchForm`, etc.
- `src/index.css` — global styles
- `public/` — static files

- This is an early frontend for a games listing app. The router is initialized in `src/main.jsx` and `App` manages the main routes and page layout.
- I used the official Vite React plugin in `vite.config.js` to enable fast HMR during development.

Thanks for reviewing my project — please let me know if you need anything else or if I should expand the README with more details.
