import { createSignal, For, JSX } from "solid-js";

type CarouselProps = {
	children: JSX.Element[];
	slideDurationSeconds: number;
	startingSlide?: number
};

const Carousel = ({ children, slideDurationSeconds, startingSlide = 0 }: CarouselProps) => {
	let [slide, setSlide] = createSignal(startingSlide);

	setInterval(() => {
		// Move to next
		setSlide(prev => ((prev + 1) % children.length));
	}, 1000 * slideDurationSeconds);
	
	return (
		<div class="relative overflow-hidden">
			<div class="flex relative transition-transform w-full" style={`transform: translateX(calc(-100% * ${slide()}))`}>
				<For each={children}>
					{(elem) => {
						return <div class="flex justify-center align-middle" style="flex: 0 0 100%;">{ elem }</div>
					}}
				</For>
			</div>
		</div>
	);
};

// .carousel {
//   --current-slide: 0;
//   /* we set position relative so absolute position works properly for the buttons */
//   position: relative;
//   overflow: hidden;
// }
// .slides {
//   display: flex;
//   transition: transform 0.5s;
//   transform: translateX(calc(-100% * var(--current-slide)));
// }
// .slide {
//   flex: 0 0 100%;
// }

export default Carousel;
