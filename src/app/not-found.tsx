import Link from "next/link";

export default function NotFound() {
    return (
	<div className="h-full w-full flex flex-col justify-center items-center">
	    <h1 className="font-bold text-2xl">404 - Page Not Found</h1>
	    <Link className="font-medium text-lg text-sky-800 underline decoration-sky-800 hover:text-sky-400 hover:decoration-sky-300" href="/">Go back Home</Link>
	</div>
    )
}
