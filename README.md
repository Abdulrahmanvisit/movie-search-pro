# Movie Explorer Pro

A movie discovery web application built with React, Vite, React Router, and Tailwind CSS. Users can search for movies using the OMDb API, view full details about each title, save favorites to a personal watchlist that persists using local storage, and browse a fully responsive interface across mobile, tablet, and desktop.

## Overview

Movie Explorer Pro lets a visitor search for any movie by title and browse a responsive grid of results. Clicking a result opens a dedicated details page showing the plot, genre, runtime, cast, director, and rating for that film. Visitors can save any movie to a personal watchlist directly from its card, and remove it later from a dedicated watchlist page. The watchlist is stored in the browser's local storage, so it remains available even after closing the tab or restarting the browser.

## Features

The application includes real time movie search powered by the OMDb API, a full movie details page reached through dynamic routing, a personal watchlist with the ability to add and remove titles from either the search results or the watchlist page itself, a fully responsive layout built with Tailwind CSS, a shared navigation bar with a collapsible mobile menu, a custom four hundred four page for any route that does not exist, lazy loaded pages for faster initial load times, and a memoized movie card component to reduce unnecessary re renders.

## Technology Stack

This project was built using React version nineteen, Vite as the build tool, React Router DOM for client side routing including nested layout routes, Tailwind CSS version four for styling, the OMDb API for movie data, and the browser's local storage for persisting the watchlist.

## Folder Structure
src/
components/
Navbar.jsx
MovieCard.jsx
pages/
Home.jsx
Search.jsx
MovieDetails.jsx
Watchlist.jsx
About.jsx
NotFound.jsx
layouts/
Layout.jsx
hooks/
useFetch.js
App.jsx
main.jsx

## Architecture Notes

Shared application state, specifically the watchlist array and the functions to add or remove a movie, lives in App.jsx and is passed down as props to the Search and Watchlist pages, since both need access to the same data. The Navbar and a shared page wrapper live inside a single Layout component, rendered once and reused across every route through React Router's nested routing and the Outlet component. Data fetching logic that would otherwise be duplicated between the search page and the movie details page has been extracted into a single reusable hook, useFetch, which handles loading state, error state, and the underlying request in one place.

## Getting Started

To run this project locally, first clone the repository to your computer. Then, inside the project folder, install all dependencies by running the install command for your package manager. After that, create a file named dot env in the root of the project and add your own OMDb API key, following the format shown in the Environment Variables section below. Finally, start the local development server and open the address shown in your terminal.

git clone https://github.com/yourusername/movie-explorer-pro.git
cd movie-explorer-pro
npm install
npm run dev

## Environment Variables

This project requires a free API key from OMDb in order to fetch movie data. You can request one at their official website. Once you have a key, create a dot env file in the root of the project containing the following line, replacing the placeholder text with your actual key.

VITE_OMDB_API_KEY=your_actual_key_here

## Available Scripts

Running the development server can be done with npm run dev. Creating a production build can be done with npm run build. Previewing that production build locally can be done with npm run preview.

## Learning Focus

This project was built step by step as a guided learning exercise, with an emphasis on understanding professional React practices such as component reusability, responsive design with Tailwind CSS, client side routing with nested layouts, connecting to a real third party API, sharing state across multiple pages, persisting data with local storage, extracting duplicated logic into a custom hook, and improving performance through lazy loading and memoization.

## License

This project is open source and available for personal or educational use.