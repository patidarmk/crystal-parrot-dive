import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

const NotFound = () => {
  const routerState = useRouterState();
  const location = routerState.location;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900/50">
      <div className="text-center p-8 bg-black/60 rounded-xl shadow-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
        <Link to="/" className="text-green-400 hover:text-green-300 underline text-lg">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;