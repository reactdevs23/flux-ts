import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-center">
      <h1 className="heading text-4xl md:text-5xl font-bold text-red-600 py-6">
        Oops! 404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Custom404;
