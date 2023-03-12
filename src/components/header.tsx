import Carousel from "./carousel";

const Header = () => {
	return (
		<>
			<div class="w-full text-pink-200 pb-4 shadow-inner mb-2 pt-1 bg-gray-800 bg-opacity-50 text-center">
				<Carousel slideDurationSeconds={10} startingSlide={1}>
					<img src="/logo-1.png" alt="jm logo 1" class="block h-44" />
					<img src="/logo-2.png" alt="jm logo 2" class="block h-44" />
				</Carousel>
				<h1>JM</h1>
				<h2>A guy that exists and does stuff sometimes</h2>
			</div>
		</>
	);
};

export default Header;
