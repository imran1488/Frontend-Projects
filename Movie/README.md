# Movie App

A React + Vite movie discovery app that consumes The Movie Database (TMDb) API to display popular movies, search for titles, and manage favorites.

## Project Overview

This app includes:

- Home page displaying popular movies fetched from TMDb
- Search functionality to look up movies by title
- Favorite movie management using React Context and `localStorage`
- Client-side routing with React Router
- Responsive UI with reusable movie card components

## Architecture

### Core structure

- `src/App.jsx`
  - Wraps the app in `MovieProvider`
  - Defines routes for `/` (Home) and `/favorite`

- `src/contexts/MovieContext.jsx`
  - Provides favorites state using React Context
  - Persists `favorites` in `localStorage`
  - Exposes:
    - `addToFavorites(movie)`
    - `removeFromFavorties(movieId)`
    - `isFavorite(movieId)`

- `src/pages/Home.jsx`
  - Fetches popular movies on mount
  - Handles search form submission
  - Displays movie list using `MovieCard`

- `src/pages/Favorite.jsx`
  - Reads favorite movies from context
  - Shows saved favorites using `MovieCard`

- `src/components/MovieCard.jsx`
  - Renders movie poster, title, release year, and favorite button
  - Toggles favorite state using context functions

- `src/services/api.js`
  - Defines API helpers for TMDb:
    - `getPopularMovies()`
    - `searchMovies(query)`

### Styling

- Global and component-specific CSS are stored under `src/css/`
- `MovieCard.css` handles card layout and favorite button styling
- `Navbar.css`, `Home.css`, and `Favorites.css` define page-level UI

## Functional behavior

### Popular movies

`Home.jsx` loads popular movies from TMDb when the app starts. The response is stored in component state and rendered in a grid.

### Search

The search input on the Home page calls `searchMovies(query)` and replaces the movie list with search results.

### Favorites

- Clicking the heart icon toggles favorite state for a movie.
- Favorite movies are kept in context state and persisted via `localStorage`.
- The Favorite page displays saved favorites using the same card component.

## File structure

```
src/
  App.jsx
  main.jsx
  components/
    MovieCard.jsx
    NavBar.jsx
  contexts/
    MovieContext.jsx
  pages/
    Home.jsx
    Favorite.jsx
  services/
    api.js
  css/
    App.css
    Favorites.css
    Home.css
    MovieCard.css
    Navbar.css
    index.css
```

## Configuration

### Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `prettier`

### API key

The TMDb API key is currently stored directly in `src/services/api.js`.

> For production use, move the key to environment variables (e.g. `.env`) and avoid committing it to source control.

## Local development

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Notes

- `MovieProvider` must wrap any component that uses `useMovieContext()`.
- The favorite button in `MovieCard.jsx` uses the `active` CSS class to show red hearts.
- The app currently toggles favorites on the same button click, so clicking again removes the movie.

## Improvements

Potential next steps:

- Move TMDb key to environment variables
- Add movie details page
- Add pagination for popular movies and search results
- Add loading skeletons and better error handling
- Prevent duplicate movies in favorites
