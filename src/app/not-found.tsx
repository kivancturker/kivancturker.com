import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 text-center">
      <div className="mb-8">
        <h1 className="animate-bounce text-[150px] font-bold text-sky-500">
          404
        </h1>
      </div>
      <h2 className="mb-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-sky-500 px-8 py-3 font-medium text-white transition duration-300 hover:bg-sky-600"
      >
        <span className="mr-2">←</span>
        Return to Homepage
      </Link>
    </div>
  );
}
