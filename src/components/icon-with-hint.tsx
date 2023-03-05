import { createSignal } from "solid-js";

type IconWithHintProps = {
	href: string;
	src: string;
	alt: string;
	hint: string;
	size: number;
};

const IconWithHint = ({ src, alt, hint, href, size }: IconWithHintProps) => {
	const [hovering, setHovering] = createSignal(false);

	const hoveringClasses = ["scale-x-100", "scale-x-0 -translate-x-1/2"];

	return (
		<>
			<a
				class="relative inline-block"
				style={{ width: `${size}px`, height: `${size}px` }}
				href={href}
				target="_blank"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<img src={src} alt={alt} width={size} height={size} class={ hovering() ? `animate-spin` : undefined} />
				<span
					class={`flex absolute bg-black text-pink-200 top-[calc(50%-1rem)] transition-all left-full justify-center align-middle text-center rounded-sm px-2 h-8 w-max ${
						hovering() ? hoveringClasses[0] : hoveringClasses[1]
					} overflow-hidden bg-opacity-40`}
				>
					{hint}
				</span>
			</a>
		</>
	);
};

export default IconWithHint;
