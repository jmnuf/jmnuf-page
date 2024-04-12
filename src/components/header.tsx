import Carousel from "./carousel";

const Header = () => {
	return (
		<>
			<div class="w-full text-pink-200 pb-4 shadow-inner mb-2 pt-1 bg-gray-800 bg-opacity-50 text-center">
				<Carousel slideDurationSeconds={10} startingSlide={1}>
					<img src="https://cdn.discordapp.com/attachments/1226481503848890378/1228476846044348458/Logo-02.png?ex=662c2f38&is=6619ba38&hm=815f187fa451fc4c5e6373a3f27926bbe1141ce9d5c59abf9247c757bd30728b&" alt="jm logo 1" width={176} height={176} class="block h-44" />
					<img src="https://cdn.discordapp.com/attachments/1226481503848890378/1228476839735853086/JMLogo2021.png?ex=662c2f36&is=6619ba36&hm=ff0d20a2efe191aa27f2dcaf481aaf2ac5c98c0852ddb4fd408c12cb6a5510b4&" alt="jm logo 2" width={176} height={176} class="block h-44" />
				</Carousel>
				<h1>JM</h1>
				<h2>A guy that exists and does stuff sometimes</h2>
			</div>
		</>
	);
};

export default Header;
