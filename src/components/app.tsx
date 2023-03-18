import type { JSX } from "solid-js/jsx-runtime";

type AppProps = {
	children: (JSX.Element|Element)[]
};

const App = ({ children }:AppProps) => {
	return (
		<div class="bg-gradient-to-b from-violet-900 to-black flex flex-col w-full overflow-x-hidden" style="min-height: 100vh;">
			{children}
		</div>
	)
};

export default App;
