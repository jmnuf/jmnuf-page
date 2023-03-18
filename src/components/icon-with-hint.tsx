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
				class="inline-block relative w-fit text-center h-8"
				href={href}
				target="_blank"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<span class="inline-flex gap-2 w-max h-full text-center">
					{message}
					<img
						src={src}
						alt={alt}
						width={size}
						height={size}
						style={{ width: `${size}px`, height: `${size}px` }}
						class={hovering() ? `animate-spin` : undefined}
					/>
				</span>
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
