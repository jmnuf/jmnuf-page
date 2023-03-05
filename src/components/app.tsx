import type { JSX } from "solid-js/jsx-runtime";

type AppProps = {
	children: (JSX.Element|Element)[]
};

const App = ({ children }:AppProps) => {
	return (
		<div class="bg-gradient-to-b from-violet-800 to-purple-900 flex flex-col w-full" style="height: 100vh;">
			{children}
		</div>
	)
};

export default App;
