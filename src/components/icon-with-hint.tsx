import { createSignal } from "solid-js";

type IconWithHintProps = {
	href: string;
	src: string;
	message: string;
	alt: string;
	hint: string;
	size: number;
};

const IconWithHint = ({
	src,
	message,
	alt,
	hint,
	href,
	size,
}: IconWithHintProps) => {
	const [hovering, setHovering] = createSignal(false);

	const hoveringClasses = ["scale-x-100", "scale-x-0 -translate-x-1/2 hidden"] as const;

	return (
		<>
			<a
				class="inline-block relative text-center h-8"
				href={href}
				// style={{ height: `${size}px` }}
				target="_blank"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<span class="inline-flex gap-2 w-[200px] h-full text-center">
					{message}
					<img
						src={src}
						alt={alt}
						// width={size}
						// height={size}
						class={hovering() ? `animate-spin` : undefined}
					/>
				</span>
				<span
					class={`flex absolute bg-black text-pink-200 top-[calc(50%-1rem)] transition-all left-[55%] justify-center align-middle text-center rounded-sm px-2 h-8 w-max ${
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
