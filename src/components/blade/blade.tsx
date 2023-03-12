import type { JSX } from "solid-js/jsx-runtime";
import "./blade.css"

type BladeProps = {
	children: JSX.Element[] | JSX.Element;
	type: "left" | "right";
}

const Blade = ({ type, children }:BladeProps) => {
	return (
		<div class={`transition-all blade-${type}`}>
			{children}
		</div>
	);
}

export default Blade;
