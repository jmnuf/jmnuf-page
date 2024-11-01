import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <Link
        className="text-lg font-medium text-sky-800 underline decoration-sky-800 hover:text-sky-400 hover:decoration-sky-300"
        href="/"
      >
        Go back Home
      </Link>
    </div>
  );
}
