import Carousel from "./carousel";

const Header = () => {
	return (
		<>
			<div class="w-full text-pink-200 pb-4 shadow-inner mb-2 pt-1 bg-gray-800 bg-opacity-50 text-center">
				<Carousel slideDurationSeconds={10} startingSlide={1}>
					<img src="https://utfs.io/f/9e41a1ab-8bd8-4f18-9bc8-fe6bef284360-vxuh55.png" alt="jm logo 1" width={176} height={176} class="block h-44" />
					<img src="https://utfs.io/f/b434e469-fefd-4cfd-864b-0e3597a3562b-lilit1.png" alt="jm logo 2" width={176} height={176} class="block h-44" />
				</Carousel>
				<h1>JM</h1>
				<h2>A guy that exists and does stuff sometimes</h2>
			</div>
		</>
	);
};

export default Header;
