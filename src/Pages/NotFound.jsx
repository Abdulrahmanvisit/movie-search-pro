import { Link } from "react-router-dom";

// Displayed when a user navigates to an undefined route.
// It informs the user that the requested page doesn't exist
// and provides a link back to the homepage.
function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="text-slate-700 mt-4 text-xl font-semibold">
        Page not found
      </p>
      <p className="mt-2 text-slate-500 max-w-md">
        The page you're looking for does not exist, or may have moved.
      </p>
      <Link to="/" className="text-blue-600 hover:underline mt-4">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
